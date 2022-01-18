import React  from 'react';
import axios from './axios';
import  items from './items'
import { Formik, Form, Field } from "formik"


// const updateItem = props => {
//     console.log(props);
   
//     //   id: '',
    //   name: '',
    //   description: '',
    //   prices: '',
    //   location: '',
    //   category:'',
    //   items:[],
    // });

    // const changeHandler = e => {
    //     e.persist();
    //     let value = e.target.value;
    //     if (e.target.name === 'items') {
    //       value = [value]
    //     }
    
      //   setItem({
      //     ...item,
      //     [e.target.name]: value,
      //     id: items.id
      //   });
      // };

      // const handleSubmit =  e => {
      //   e.preventDefault();
      export default function editItem(props) {
        return (
          <form className="inner-form" onSubmit={e => props.handleSubmit(e)}>
            <h2>Update Item</h2>
           <label htmlFor="itemForm_name">Name</label>
              <Field
                type="text"
                id="itemForm_name"
                name="name"
                placeholder="Enter item name"
                value={props.name}
                onChange={e => {
                  props.editDetails(e);
                }}
              />
              />
              <label htmlFor="itemForm__description">Description</label>
              <Field
                type="text"
                id="itemForm_description"
                name="description"
                placeholder="Enter item description"
                value={props.description}
                onChange={e => {
                  props.editDetails(e);
                }}
              />
              />
              <label htmlFor="itemForm__price">Price</label>
              <Field
                type="text"
                id="itemForm_price"
                name="price"
                placeholder="Enter product price"
                value={props.price}
                onChange={e => {
                  props.editDetails(e);
                }}
              />
              />
              <label htmlFor="itemForm__location">Location</label>
              <Field
                type="text"
                id="itemForm__location"
                name="location"
                placeholder="Enter item location"
                value={props.Location}
                onChange={e => {
                  props.editDetails(e);
                }}
              />
              />
              <label htmlFor="itemForm__category">Category</label>
              <Field
                type="text"
                id="itemForm__category"
                name="category"
                placeholder="Enter item category"
                value={props.category}
                onChange={e => {
                  props.editDetails(e);
                }}
              />
              />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    );
              }
