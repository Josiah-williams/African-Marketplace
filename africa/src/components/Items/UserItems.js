import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
import { deleteItem, getItems,} from "../state/actionCreators";

const UserItems = props => {
const history = useHistory();

const { id } = useParams();
    

const handleEdit = e => {
        e.preventDefault();
        console.log(props);
        history.push(`/updateItem/${props.item.id}`)
        };
  
        const handleDelete = e => {
          e.preventDefault();
          console.log('delete item!', props.item.id)
          props.deleteItem(props.item.id);
        };
    

        return (
            <Link to={`/items/${props.item.id}`}>
              <div className="item-card-container">
              <StyledItems className="styled-card">
              <h4>{props.item.name}</h4>
          <h4>{props.item.description}</h4>
          <h4>{props.item.price}</h4>
          <h4>{props.item.location}</h4>
          <h4>{props.item.category}</h4>
          <StyledButton onClick={handleEdit} className="hover-grow">
            🖋
          </StyledButton>
          <StyledButton onClick={(e)=>handleDelete(e,props.item.id)} className="hover-grow">
            ✖
            </StyledButton>
        </StyledItems>
        </div>
    </Link>
  );
};

const mapStateToProps = state => {
    return {
      };
    };
    export default connect(mapStateToProps, { deleteItem, getItems })(
        UserItems
      );

  const StyledItems = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  background-color:#CFDEF3;
  background-color: #cfdef3;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  max-width: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: 1.1rem;
  transition: 0.5s;
  color: black;
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
const StyledButton = styled.button`
  padding: 8px 8px;
  background-color: #2da561;
  color: #fff;
  width: 30%;
  border: 1px solid #2da561;
  padding: 0.6rem;
  line-height: 1;
  background-color: 250ms;
  margin: 30 40 40 0;
  border-radius: 2px;
  font-size: 1rem;
  display: flex-box;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
  }
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }`