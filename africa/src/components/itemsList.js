import React, { useState , useEffect} from "react";
import axios from  "../auth/axiosWithAuth";
import Items from "../components/items";
import { userContext } from "../context/userContext";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import {useHistory} from 'react-router-dom';


export default function Itemslist() {
  const [items, setItems] = useState([]);
  const [itemsEdit, setitemsUpdate] = useState({
    location: " ",
    item: " ",
    description: " ",
    category: "",
    price: 0
  });
  const [currentId, setcurrentId] = useState(null);
  const [currentUserId, setcurrentUserId] = useState(null);

  // useEffect(() => {
    axiosWithAuth()
      .get("/items")
      .then(resp => 
        setItems(resp.data))
        // console.log(items, resp)
      .catch(error => console.log(error)); 
    // }, []);
    // console.log(items)
  
    const deleteItem = ({ id, user_id }) => {
      axios()
        .delete(
          `https://lbs-african-marketplace.herokuapp.com/items/${id}`)
        .then(resp => {
          alert(resp.data.message);
        })
        .catch(err => {
          debugger;
        });
    };
    const editItem = product => {
      setcurrentId(product.id);
      setcurrentUserId(product.user_id);
    };
    const onSubmit = ({id, e })  => {
      e.preventDefault();
      axios()
      .put(
        `https://lbs-african-marketplace.herokuapp.com/items/${id}`,itemsEdit)
      .then(resp => {  
        setcurrentId(null);
      })
      .catch(err => {
        debugger;
      });
  };
  const oncancel = () => {
    setcurrentId(null);
  };
  const onchange = e => {
    setitemsUpdate({ ...itemsEdit, [e.target.name]: e.target.value });
  };

  const obj = {
    items: items,
    editItem: editItem,
    deleteItem: deleteItem,
    currentId: currentId,
    onSubmit: onSubmit,
    itemsEdit: itemsEdit,
    onchange: onchange,
    oncancel: oncancel
  };
  // if (items.length == 0) {
  //   return <h1>loading</h1>;
  ;
  return (
    <div>
      <userContext.Provider value={items}>
        <Items />
      </userContext.Provider>
    </div>
  );
}