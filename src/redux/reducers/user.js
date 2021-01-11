import {IS_LOG_IN, IS_LOG_OUT} from "../action-types";

const initialState = {loggedIn: false}

export const userReducer = (state= initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case IS_LOG_IN: {
      console.log(payload)
      return {...state, loggedIn: true, user: payload}
    }

    case IS_LOG_OUT: {
      return {...state, loggedIn: false}
    }

    default: {
      return state
    }
  }
}
