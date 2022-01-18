import * as types from "./actionTypes";
import {axiosWithAuth} from "../auth/axiosWithAuth";
import axios from "axios"

export const changeHandler = e => dispatch => {
	dispatch({
	  type: types.INPUT_CHANGE,
	  payload: [e.target.name, e.target.value]
	});
  };
  
//login
export const login = (credentials, history) => dispatch => {
	dispatch({ type: types.LOGIN_START });
	   axiosWithAuth()
	   .post(
		   "/auth/login", 
		   credentials)
	  .then(res =>{
		dispatch({ type: types.LOGIN });
		localStorage.setItem("token", res.data.token);
		history.push(`/items`);
	  })
	  .catch(err => {
		console.log(err);
	  })
	  .finally(() => {
		  console.log("login sucessful")
		dispatch({ type: types.LOGIN_END });
	  });
  };

  //logoout
export const logout = history => dispatch => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	localStorage.removeItem("type")
	dispatch({ type:types.LOG_OUT})
	history.push("/login");
  };
// Step 7: Design action creator functions
export const getItems = () => dispatch => {
	dispatch({ type:types.GET_ITEMS_START });
	axiosWithAuth()
		.get("/items")
		.then(res => {
			console.log(res.data);
			dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res.data })
		  }
		  )
		  .catch(err => dispatch({ type: types.GET_ITEMS_FAIL, payload: err.response }));
		}
export const postItems = additems => dispatch => {
 
    dispatch({ type: types.POST_ITEMS })
    axiosWithAuth()
    .post("/item/additems", additems)
    .then(response => {
      console.log(response.data);
      
      dispatch({
        type: types.POST_ITEMS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error.response)
      dispatch({
        type: types.POST_ITEMS_FAILURE,
        payload: error.response.data.Error
      });
    });
  };
  
	
	
export const deleteItem = id =>  dispatch => {
	dispatch({ type: types.DELETE_ITEM_START})
	const token = localStorage.getItem("token");
	 axiosWithAuth()
	.delete(`/items/${id}` , {
	headers: {
        Authorization: token
      }
    })
	.then(res => {
		dispatch({ type: types.DELETE_ITEM_SUCCESS, payload: id });
	})
	.catch(err => {
		dispatch({ type: types.DELETE_ITEM_FAILURE, payload: err.errorMessage });
    });
};

export const addItem = ({id, name,description,price,location,category}) => {
return dispatch => {
  dispatch({ type: types.UPDATE_ITEM_START });
	axiosWithAuth().put(`/items/${id}`, {name,
	description,
	price,
	location,
	category})
	.then(response => {
	  dispatch({
		  type: types. UPDATE_ITEM_SUCCESS,
		payload: response.data });
	})
	
	  .catch(error => {
		dispatch({
			type: types.UPDATE_ITEM_FAILURE,
			payload: error
		  });
		});
	};
}
