import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Context from "./context/userContext"
import Items from "./components/items"

//Combining all the reducers
const mainReducer = combineReducers({
    login: loginFormReducer,
    Signup: signupFormReducer,
    items: itemReducer,
    add: addFormReducer,
    additem: additemReducer
});

//Creating a store
const store = createStore(
  mainReducer,
  {},
  compose(
    applyMiddleware(thunk /* ,etc , other middlewares */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
  ReactDOM.render(
    <Provider store={store}>
    <Router>
      <App />
      </Router>
      </Provider>
  , document.getElementById("root")
  );
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

