import "./style.css";
import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";

export const LoginForm = (props) => {
    return <>
        <h1>Login</h1>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                axios.post('/user/login', values)
                    .then(user => {
                        localStorage.setItem("user", JSON.stringify(user.data))
                        props.setUser(user.data);
                        props.closeModalFunction(null);
                    }).catch(err => {
                    alert(err + "Invalid username and password combination")
                })
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form className={"authForm"}>
                    <label htmlFor={"email"}>Email</label>
                    <Field type="email" name="email" placeholder={"Email"}/>
                    <ErrorMessage name="email" component="div" className={"formError"}/>
                    <label htmlFor={"password"}>Password</label>
                    <Field type="password" name="password" placeholder={"Password"}/>
                    <ErrorMessage name="password" component="div" className={"formError"}/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </>;
};
