import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = ({ children, user_type, appState, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        appState ? children : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    user_type: state.user.user_type,
    appState: state.appState
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);