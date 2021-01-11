import {IS_LOG_IN, IS_LOG_OUT} from "../action-types";

const initialState = {loggedIn: false, token: ''}

export const userReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case IS_LOG_IN: {
      console.log(state.loggedIn)
      return payload
             ? {...state, loggedIn: true, token: payload}
             : {...state, loggedIn: false}
    }

    case IS_LOG_OUT: {
      console.log(state.loggedIn)
      return {...state, loggedIn: false}
    }

    default: {
      return state
    }
  }
}
