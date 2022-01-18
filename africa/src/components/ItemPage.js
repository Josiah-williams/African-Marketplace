import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


import { getOneItem, deleteItem} from "./state/actionCreators";

function ItemPage(props) {
  const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
      props.getOneItem(id);
    }, [id]);
  

    function deleteItem(id) {
      props.deleteItem(id)
      history.push('/updateItem')
    };

    function goToEdit(e) {
      e.preventDefault();
      history.push(`/updateitem/${id}`)
    };
  
  
    //functions to call props.delete and props.edit action creator functions
    // props.edit action creator functions
  
    return (
      <div>
        {/* //BUTTONS TO DELETE AND EDIT  */}
        <button onClick={() => props.deleteItem(id)}>Delete item</button>
        <button onClick={goToEdit}>Edit</button>
        <h3> Your item List: </h3>
        <p>Name: {props.items.name}</p>
        <p>Description:{props.description}</p>
        <p>Price:{props.price}</p>
        <p> Location: {props.location}</p>
        <p> Category: {props.category}</p>
      </div>
    
    );

  }
  
  const mapStateToProps = state => {
    return {
      items: state.items.items
    };
  };

  export default connect(mapStateToProps, { getOneItem, deleteItem })(ItemPage);