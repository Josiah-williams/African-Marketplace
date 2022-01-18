import React, { useState, useEffect } from 'react';
import axios from 'axios';
import editItem from "./state/actionCreators"


function UpdateItem() {


// const UpdateItem = props => {
//     console.log(props);
//     const [item, setItem] = useState({
//       id: '',
//       name: '',
//       description: '',
//       location: '',
//       items: [],
//     });


//   const changeHandler = e => {
//     e.persist();
//     let value = e.target.value;
//     if (e.target.name === 'items') {
//       value = [value]
//     }

//     setItem({
//       ...item,
//       [e.target.name]: value,
//       id: props.match.params.id
//     });
//   };
//   const handleSubmit =  e => {
//     e.preventDefault()

    return (
        <div>
          <h2>Update Item</h2>
          <form>
              <label>
          {/* <form onSubmit={handleSubmit}> */}
            <input
              type="text"
              name="name"
            //   onChange={changeHandler}
              placeholder=" update name"
            //   value={item.name}
            />
            <div className="baseline" />
    
            <input
              type="text"
              name="description"
            //   onChange={changeHandler}
              placeholder="update description"
            //   value={item.description}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="price"
            //   onChange={changeHandler}
              placeholder="update price"
            //   value={item.price}
            />
            <div className="baseline" />
    
            <input
              type="string"
              name="location"
            //   onChange={changeHandler}
              placeholder="update location"
            //   value={item.location}
            />
    
            <div className="baseline" />

            <input
              type="string"
              name="category"
            //   onChange={changeHandler}
              placeholder="update category"
            //   value={item.category}
            />
    
    
            <button className="md-button form-button">Update</button>
            </label>
          </form>
        </div>
      );
    };

export default UpdateItem