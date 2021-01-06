import {IS_LOG_IN, IS_LOG_OUT} from "../action-types";

const initialState = {loggedIn: false}

export const userReducer = (state= initialState, action) => {

  switch (action.type) {

    case IS_LOG_IN: {
      return {...state, loggedIn: true}
    }

    case IS_LOG_OUT: {
      return {...state, loggedIn: false}
    }



    default: {
      return state
    }
  }
}