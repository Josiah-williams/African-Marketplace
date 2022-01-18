import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {useHistory} from "react-router-dom"
import {axiosWithAuth} from "../auth/axiosWithAuth"
import * as actionCreators from "../state/actionCreators"
import {connect} from "react-redux"

export function Register(props) {
  const history = useHistory();

  const initialState = {
    username: '',
    password: '',
    department: '',
  
  }
  function handleSubmit(values, actions) {
    console.log(values);
    axiosWithAuth()
      .post(
        "/auth/register",
        values)
        
      .then(response => {
        history.push("/login");

        console.log(response.data);

        actions.resetForm();
      })
      .catch(error => console.log(error.res))
      .finally(() => {
        console.log("done");
      });
  }

  return (
    <div className='LoginForm'>
      <h1>Africa MarketPlace SignUp Form</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialState}
>
        <Form className="form">
        <label>username</label>
        <Field
        type="text"
        id="username"
        name="username"
        className="input"/>
        <ErrorMessage name="username" component="div" className="error"/>

        <label>Department</label>
        <Field
        type="tel"
        id="department"
        name="department"
        className="input"/>
        <ErrorMessage name="department" component="div" className="error"/>

        <label>password</label>
        <Field
        type="password"
        id="password"
        name="password"
        className="input"/>
        <ErrorMessage name="password" component="div" className="error"/>

        <button type="submit">Continue</button>

      </Form>
    </Formik>
    </div>
    )}

    function mapStateToProps(state) {
      return {
        formValues: state.formValues
      };
    }
  
    export default connect(mapStateToProps, actionCreators)(Register);
  