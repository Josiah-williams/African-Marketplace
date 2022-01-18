import React from "react";
import { Formik, Form, Field } from "formik";
import {axiosWithAuth} from "../auth/axiosWithAuth";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
// import img10 from '../img/img10/AfricaFlag.png';

export default function Additem({ setNewitemId }) {
    const history = useHistory()
  function handleSubmit(values, actions) {
    values.user_id = 1;
    axiosWithAuth()
      .post(
        "/items/additem",
        values
      )
      .then(res => {
        setNewitemId(res.data);
        actions.resetForm();
        history.push("/itempage")
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }
  return (
    <StyledAdd>
      <div className="additem">
      {/* <img src={img10} alt="flag" className="navbar-img10"></img> */}
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
            location: "",
            category: ""
          }}
          onSubmit={handleSubmit}
          render={props => (
            <Form>
              <label htmlFor="itemForm_name">Name</label>
              <Field
                type="text"
                id="itemForm_name"
                name="name"
                placeholder="Enter item name"
              />
              <label htmlFor="itemForm__description">Description</label>
              <Field
                type="text"
                id="itemForm_description"
                name="description"
                placeholder="Enter item description"
              />
              <label htmlFor="itemForm__price">Price</label>
              <Field
                type="text"
                id="itemForm_price"
                name="price"
                placeholder="Enter product price"
              />
              <label htmlFor="itemForm__location">Location</label>
              <Field
                type="text"
                id="itemForm__location"
                name="location"
                placeholder="Enter item location"
              />
              <label htmlFor="itemForm__category">Category</label>
              <Field
                type="text"
                id="itemForm__category"
                name="category"
                placeholder="Enter item category"
              />
              <button type="submit" disabled={props.isSubmitting}>
                {props.isSubmitting ? "Submit your item list" : "submit"}
              </button>
            </Form>
          )}
        />
      </div>
    </StyledAdd>
  );
}
const StyledAdd = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  margin: 16px auto;
  text-align: center;
  background-size: 100% 100%;
  & form {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    flex-flow: column nowrap;
    margin: 16px auto;
    input {
    width: 255px;
    padding: 15px 20px;
    margin: 20px 15px;
    box-sizing: border-box;
    border: 2px solid #A8C0FF;
    border-radius: 3px;
  }
    label {
      color: white;
      text-shadow: 2px 2px 2px black;
    }
    & button {
      border-radius: 3px;
      /* padding:5px; */
      background: black;
      transition: 0.9s ease-in-out;
      padding: 10px 15px;
      font-size: 16px;
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
        0 2px 2px 1px rgba(0, 0, 0, 0.24);
      transition: all 0.2 ease-in;
      color: white;
      &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        text-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12),
          0 2px 3px 2px rgba(0, 0, 0, 0.24);
      `  