import "./style.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import axios from "axios";
import { useUserUpdate } from "../../UserProvider";

interface FormValues {
  email: string;
  password: string;
  username: string;
}

export const RegisterForm = ({ setModalType }: any) => {
  // Form validation, error messages
  // @ts-ignore
  const setUser = useUserUpdate();
  const validateRegisterValues = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };

  // Registering logic, submitting form asynchronously
  const submitRegisterValues = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      axios.post("/register", values).then((user) => {
        localStorage.setItem("user", JSON.stringify(user.data));
        setUser(user.data);
        setModalType(null);
      });
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <h1>Register</h1>

      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validate={validateRegisterValues}
        onSubmit={submitRegisterValues}
      >
        {({ isSubmitting }) => (
          <Form className={"authForm"}>
            <label htmlFor={"email"}>Email</label>

            <Field type="email" name="email" placeholder={"Email"} />

            <ErrorMessage
              name="email"
              component="div"
              className={"formError"}
            />

            <label htmlFor={"username"}>Name</label>

            <Field type="text" name="username" placeholder={"Name"} />

            <ErrorMessage
              name="username"
              component="div"
              className={"formError"}
            />

            <label htmlFor={"password"}>Password</label>

            <Field type="password" name="password" placeholder={"Password"} />

            <ErrorMessage
              name="password"
              component="div"
              className={"formError"}
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
