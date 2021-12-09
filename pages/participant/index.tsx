import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";


import Input from "../../components/Input/Input";

const LoginSlug = () => {
  const [loading, setLoading] = useState(false);

  const startupInitialValues = {
    startup_email: "",
    password: "",
  };

  const startupLoginSchema = Yup.object().shape({
    startup_email: Yup.string().email("Invalid email").required("Wajib diisi"),
    password: Yup.string().required("Wajib diisi"),
  });

  return (
    <div className={styles.login}>
      <div className={styles.login_startup}>
        <h1 className={styles.login_startup_title}>Startup Login</h1>

        <Formik
          initialValues={startupInitialValues}
          validationSchema={startupLoginSchema}
          onSubmit={async (values) => {
            await setLoading(true);
            // await startupLoginHandler(values);
            await setLoading(false);
          }}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <Field name='startup_email'>
                {({ field }: any) => (
                  <Input
                    hasLabel={true}
                    labelTitle='Company email: '
                    placeholder='Email...'
                    type='text'
                    required={true}
                    error={touched.startup_email && errors.startup_email}
                    labelClassName={styles.login_startup_label}
                    inputBoxClassName={styles.login_startup_input}
                    errorMessageClassName={styles.login_startup_errorMessage}
                    {...field}
                  />
                )}
              </Field>
              <Field name='password'>
                {({ field }: any) => (
                  <Input
                    hasLabel={true}
                    labelTitle='Password: '
                    placeholder='Secret password...'
                    type='password'
                    required={true}
                    error={touched.password && errors.password}
                    labelClassName={styles.login_startup_label}
                    inputBoxClassName={styles.login_startup_input}
                    errorMessageClassName={styles.login_startup_errorMessage}
                    {...field}
                  />
                )}
              </Field>

              <button className={styles.login_startup_submitBtn} type='submit'>
                {loading ? "Loading..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginSlug;
