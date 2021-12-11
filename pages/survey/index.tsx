import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import surveyQuestions from "../api/survey-questions.json";
import jsCookie from 'js-cookie';
import styles from "./survey.module.scss";
import addSurvey from "../../client/eventHandler/addSurvey";

const Survey = () => {
  const [loading, setLoading] = useState(false);

  const surveyInitialValues = {
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    answer_5: "",
  };

  const surveySchema = Yup.object().shape({
    answer_1: Yup.string().required("Wajib diisi"),
    answer_2: Yup.string().required("Wajib diisi"),
    answer_3: Yup.string().required("Wajib diisi"),
    answer_4: Yup.string().required("Wajib diisi"),
    answer_5: Yup.string().required("Wajib diisi"),
  });

  const fullName = jsCookie.get('full_name') ? jsCookie.get('full_name') : '' ;

  const questionsComponent = (question: any) => {
    return (
      <div className={styles.survey_question}>
        <div>
          {question.no} {question.question}{" "}
        </div>
        {question.answerList.map((answer: any) => (
          <div key={answer}>
            <Field type='radio' name={question.name} value={answer} />
            <label htmlFor={question.name}>{answer}</label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.survey}>
      <h1 className={styles.survey_title}>Please fill all of the following questions</h1>

      <Formik
        initialValues={surveyInitialValues}
        validationSchema={surveySchema}
        onSubmit={async (values) => {
          setLoading(true);
          addSurvey(fullName ? fullName : '', values)
          setLoading(false);
        }}
      >
        {({ values }) => (
          <Form noValidate>
            {surveyQuestions.questionList.map((question) => questionsComponent(question))}

            <button className={styles.survey_submitBtn} type='submit'>
              {loading ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Survey;
