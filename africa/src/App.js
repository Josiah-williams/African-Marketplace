import React, { useEffect } from "react";
import { Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {  logout, updateItem } from "./components/state/actionCreators";
import Items from "./components/items"
import SellerForm from "./seller/sellerForm"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import RestrictedRoute from "./components/auth/protectedRoute";
import UserItems from "./components/Items/UserItems";
import UpdateItem from "./components/Items/UpdateItem";

function App({ appState, user, checkToken, logout }) {
  const history = useHistory();
  useEffect(() => {
  }, []);
  return (
    
    <div className="container">
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path ="/items">
        <Items/>
        </Route>
        <Route exact path ="/Register">
          <Register />
        </Route>
        <Route exact path="/sellerForm">
       <SellerForm />
      </Route>
      <Route  exact path ="/updateItem/:id">
        <UpdateItem />
      </Route>
      <Route exact path="/items/:id">
        <UserItems />
      </Route>
      </Switch>
        </div>

  );
}
function mapStateToProps(state) {
  return {
    appState: state.appState,
    user: state.user
  };
}
export default connect(mapStateToProps, { logout })(App);