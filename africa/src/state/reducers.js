import * as types from "./actionTypes";

//step 1: decide state slices
const initialState = {
    user: {
        id:0,
        username: "",
        password: "",
    },
	items:[]
};


//step 3: create reducers
//Reducer 1, appState
const initialAppState = false;
export function appStateReducer(appState = initialAppState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true;
    case types.LOG_OUT:
      return false;
    case types.TOKEN_CHECK_SUCCESS:
      return true;
    case types.TOKEN_CHECK_FAILURE:
      return false;
    default:
      return appState;
  }
}

//user data reducer
const initialUser = {
	user_id: 0,
	user_type: "seller"
  };
  export function userReducer(user = initialUser, action) {
	switch (action.type) {
	  case types.LOGIN_SUCCESS:
		return action.payload.user;
	  case types.LOG_OUT:
		return initialUser;
	  case types.TOKEN_CHECK_SUCCESS:
		return action.payload.user;
	  case types.TOKEN_CHECK_FAILURE:
		return initialUser;
	  default:
		return user;
	}
  }

  //reducer 3, token reducer
const initialToken = localStorage.getItem("token");
export function tokenReducer(token = initialToken, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload.token;
    case types.LOG_OUT:
      return null;
    case types.TOKEN_CHECK_FAILURE:
      return null;
    case types.TOKEN_CHECK_SUCCESS:
      return token;
    default:
      return token;
  }
}
