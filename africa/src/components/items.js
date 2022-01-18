import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import  * as actionCreators  from "./state/actionCreators";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import UserItems from "./Items/UserItems";
import styled from "styled-components";

export default function Items() {
  const items = useContext(userContext);
  const [deleteItem, updateItem,] = useState(items)
  const [itemslist, getitems] = useState([])

  // const { items } = userContext

const StyledContainer = styled.div`
  padding-top: 100px;
  background-repeat: no-repeat;
  padding-bottom: 200px;
  background-image: url("https://images.unsplash.com/photo-1470074558764-4e577e98bc85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-size:100% 100%;

  `;
  const StyledButton = styled.button`
  padding: 8px 12px;
  background-color: #24243e;
  color: #fff;
  width: 25%;
  border: 1px solid #22283a;
  padding: 1rem;
  line-height: 1;
  margin: 1.2rem;
  background-color: 250ms;
  margin-bottom: 50px;
  margin-right: 30px;
  border-radius: 4px;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
  label {
    padding: 1rem;
    color: #495057;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

export function Item({ getItems, items }) {
  const history = useHistory();
  useEffect(() => {
    getItems();
  }, []);
  if (!items){return null}




    const Logout = e => {
      localStorage.removeItem("token");
      history.push("/login");

    };
    const sell = e => {
      history.push("/sellerform")
    }

    return (
      <>

        <h1>items List</h1>

        {
        items.map(item => (
          <Grid key = {item.id} item>
         <UserItems item={item} />
                  
              {/* </div> */}

              </Grid>




        ))}

        

        <StyledButton onClick={Logout}>Log out</StyledButton>
        <StyledButton onClick={sell}>sell</StyledButton>
  </>
    )
}



   export default connect(
    function mapStateToProps(state) {
      console.log(state);

      return {
        items: state.items.items
      };
    },
    actionCreators
  )(Item); }
