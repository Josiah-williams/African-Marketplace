import * as types from "./actionTypes";
import axios from "./auth/axiosWithAuth";


//creates an action object with type and payload
const action = (type, payload) => ({ type, payload });
//login
export const login = (credentials, history) => async dispatch => {
	try {
	  const response = await axios().post("https://lbs-african-marketplace.herokuapp.com/auth/login", credentials);
	  const { token, user } = response.data;
	  localStorage.setItem("token", token);
	  dispatch(
		action(types.LOGIN_SUCCESS, {
		  user,
		  token,
		  account_details: user.account_details
		})
	  );
	  history.push(`/items`);
	} catch (error) {
	  console.debug(error);
	}
  };
  
  //logoout
export const logout = history => dispatch => {
	localStorage.removeItem("token");
	dispatch(action(types.LOG_OUT));
	history.push("/login");
  };
  
// Step 7: Design action creator functions
export const getItems = () => dispatch => {
	axios()
		.get("https://lbs-african-marketplace.herokuapp.com/items")
		.then(response => {
			dispatch({
				type: types.GET_ITEMS,
				payload: {
					list: response.data.list
				}
			});
		})
		.catch(() => {
			console.log("error!!!");
		});
};

export const postItems = additems => dispatch => {
 
    dispatch({ type: types.CREATE_ITEMS })
    axios()
    .post("https://lbs-african-marketplace.herokuapp.com/item/additems", additems)
    .then(response => {
      console.log(response.data);
      
      dispatch({
        type: types.CREATE_ITEMS,
        payload: response.data
      });
    })
    .catch(() => {
      console.log("error");
      
	});
	};

	
	
export const deleteItem = id =>  dispatch => {
	console.log(id);
  
	const response = axios().delete(`https://lbs-african-marketplace.herokuapp.com/items/${id}`);
	const deleted = response.data;
	dispatch(action(types.DELETE_ITEM, id));
  };

  export const getitems = id => dispatch => {
	console.log(id);
  
	const response = axios().get('https://lbs-african-marketplace.herokuapp.com/items/${id}')
	const get = response.data;
	dispatch(action(types.GET_ITEMS, id));
};


export const editItem = updateItem => dispatch => {
	axios().put('https://lbs-african-marketplace.herokuapp.com/items/${id}`,edititem')
	.then(response => {
	   console.log(response.data);
   
	dispatch(action(types.EDIT_ITEM, updateItem));
	})
	  .catch(error => {
	   console.log(error);
   })
}
