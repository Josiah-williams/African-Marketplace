import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import sellerForm from "../seller/sellerForm";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const history = useHistory()

  function handleSubmit(credentials, setCredentials) {
    console.log(credentials);
      axios
      .post("https://lbs-african-marketplace.herokuapp.com/auth/login", credentials)
      .then(response => {
        console.log("Login sucessful", response.data)
      const { token, user } = response.data;
      localStorage.setItem("token", token);

      console.log(response.data);
      setCredentials.resetForm();
      history.push(`/itemsList`);
  })
    .catch(error => console.log(error))
      
    }
  

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("please enter your name"),
    password: Yup.string().required("please enter a password")
  });

  // function handleType() {
  //   setType(!type);
  // }


  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialState}
    >
      <Form className="form-container">
        <h1 className="card--title">Login</h1>
        <label className="form--label">
          <Field
            required
            type="text"
            name="username"
            required
            className="form--input"
          />
          <span className="input--label">Username</span>
          <ErrorMessage name="username" component="div" className="error" />
        </label>
        <label className="form--label">
          <Field
            required
            type="password"
            id="password"
            name="password"
            className="form--input"
          />
          <span className="input--label">Password</span>
          <ErrorMessage name="password" component="div" className="error" />
        </label>
        <button className="button-primary button-big" id="button" type="submit">
          LOGIN
        </button>
      </Form>
    </Formik>
  );
  }
  const initialState = {
    username: "",
    password: ""
  };

  export default withRouter(LoginForm);

