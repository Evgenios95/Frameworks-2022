import "./style.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import axios from "axios";

interface LoginFormProps {
  setUser: (arg: any) => void;
  setModalType: (modalType: string | null) => void;
}

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = ({ setUser, setModalType }: LoginFormProps) => {
  return (
    <>
      <div className="login-header">Login</div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          axios
            .post("/login", values)
            .then((user) => {
              localStorage.setItem("user", JSON.stringify(user.data));
              setUser(user.data);
              setModalType(null);
            })
            .catch((err) => {
              alert(err + "Invalid username and password combination");
            });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={"authForm"}>
            <label htmlFor={"email"}>Email</label>

            <Field type="email" name="email" placeholder={"Email"} />

            <ErrorMessage
              name="email"
              component="div"
              className={"form-error"}
            />

            <label htmlFor={"password"}>Password</label>

            <Field type="password" name="password" placeholder={"Password"} />

            <ErrorMessage
              name="password"
              component="div"
              className={"form-error"}
            />

            <button
              className="product-button login-button"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
