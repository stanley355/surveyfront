import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./participant.module.scss";

import Input from "../../components/Input/Input";

const Participant = () => {
  const [loading, setLoading] = useState(false);

  const participantInitialValues = {
    full_name: "",
    email: "",
    phone_number: "",
  };

  const participantSchema = Yup.object().shape({
    full_name: Yup.string().required("Wajib diisi"),
    email: Yup.string().email("Invalid email").required("Wajib diisi"),
    phone_number: Yup.string().required("Wajib diisi"),
  });

  return (
    <div className={styles.participant}>
      <h1 className={styles.participant_title}>Please fill participant data</h1>

      <Formik
        initialValues={participantInitialValues}
        validationSchema={participantSchema}
        onSubmit={async (values) => {
          setLoading(true);
          // await startupparticipantHandler(values);
          setLoading(false);
        }}
      >
        {({ errors, touched }) => (
          <Form noValidate>
            <Field name='full_name'>
              {({ field }: any) => (
                <Input
                  hasLabel={true}
                  labelTitle='Full Name'
                  placeholder='Your name'
                  type='text'
                  required={true}
                  error={touched.full_name && errors.full_name}
                  labelClassName={styles.participant_label}
                  inputBoxClassName={styles.participant_input}
                  errorMessageClassName={styles.participant_errorMessage}
                  {...field}
                />
              )}
            </Field>
            <Field name='email'>
              {({ field }: any) => (
                <Input
                  hasLabel={true}
                  labelTitle='Email '
                  placeholder='@something...'
                  type='email'
                  required={true}
                  error={touched.email && errors.email}
                  labelClassName={styles.participant_label}
                  inputBoxClassName={styles.participant_input}
                  errorMessageClassName={styles.participant_errorMessage}
                  {...field}
                />
              )}
            </Field>

            <Field name='phone_number'>
              {({ field }: any) => (
                <Input
                  hasLabel={true}
                  labelTitle='Phone Number'
                  placeholder='Where can I call u?'
                  type='tel'
                  required={true}
                  error={touched.phone_number && errors.phone_number}
                  labelClassName={styles.participant_label}
                  inputBoxClassName={styles.participant_input}
                  errorMessageClassName={styles.participant_errorMessage}
                  {...field}
                />
              )}
            </Field>

            <button className={styles.participant_submitBtn} type='submit'>
              {loading ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Participant;
