import React, { useState } from "react";
import { connect } from "react-redux";
import {addItem} from "../state/actionCreators";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export function UpdateItem(props) {
    const history = useHistory();
    console.log(props);
    const [item, setItemsValues] = useState({ id: "", name:"", description:"", price:"", location: "", category:"" });
    const {id} = useParams()
  console.log(id);

    const handleChange = event => {
      setItemsValues({
        ...item,
        [event.target.name]: event.target.value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      const newItem = {
        id: id,
        name: item.name,
        description: item.description,
        price: item.price,
        location: item.location,
        category: item.category,
      }
      console.log(newItem);
      if (!item.id || !item.name || !item.description || !item.price || !item.location || !item.category ) {
      }
      props.addItem(newItem);
      history.push(`/items`)
    }
    return (
        <div className="update-item">
          <p className="update-title">Update Item</p>
          <form onSubmit={handleSubmit}>
          <label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={item.name}
            placeholder= "your new item here"
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={item.description}
            placeholder="Your new Description here.."
          />
        </label>
        <label>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            value={item.price}
            placeholder="Your new item price here.."
          />
        </label>
        <label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={item.location}
            placeholder="Your new location here.."
          />
        </label>
        <label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={item.category}
            placeholder="Your new item category here.."
          />
        </label>
        <button onClick={handleSubmit}>Update your item</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      items: state.items.userItems,
      isUpdatingItem: state.items.isUpdatingItem,
    formValues: state.formValues
    };
};

export default connect(mapStateToProps, {addItem})(UpdateItem);