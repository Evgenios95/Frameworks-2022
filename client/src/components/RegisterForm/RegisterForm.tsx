import "./style.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import axios from "axios";
import {
  LoggedInUserProps,
  useUserUpdate,
} from "../../utils/providers/UserProvider";

interface RegisterFormProps {
  setModalType: (modalType: string | null) => void;
}

interface FormValues {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export const RegisterForm = ({ setModalType }: RegisterFormProps) => {
  const setUser: (user: LoggedInUserProps) => void = useUserUpdate();

  // Formik functionality for validation & error messages
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

    if (!values.firstname) {
      errors.firstname = "Required";
    }

    if (!values.lastname) {
      errors.lastname = "Required";
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
      <div className="login-header">Register</div>
      <Formik
        initialValues={{ email: "", password: "", firstname: "", lastname: "" }}
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
              className={"form-error"}
            />

            <label htmlFor={"firstname"}>First Name</label>

            <Field type="text" name="firstname" placeholder={"First Name"} />

            <ErrorMessage
              name="firstname"
              component="div"
              className={"form-error"}
            />

            <label htmlFor={"lastname"}>Last Name</label>

            <Field type="text" name="lastname" placeholder={"Last Name"} />

            <ErrorMessage
              name="lastname"
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
            <p>
              Already have an account?
              <span
                className={"loginFormButton"}
                onClick={() => setModalType("login")}
              >
                Login
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};
