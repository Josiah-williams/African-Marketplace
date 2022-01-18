import React, { useState } from "react";
import {login} from  "../state/actionCreators";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Switch, Route, Link, useHistory } from "react-router-dom";

export function Login({ login }) {
  const [type, setType] = useState(true);

  const history = useHistory();

  const initialState = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("please enter your name"),
    password: Yup.string().required("please enter a password")
  });

  function handleSubmit(values, actions) {
    login(values, history);
  }

  function handleType() {
    setType(!type);
  }

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

export default connect(state => state, { login })(Login);
