import {GET_TOKEN_FROM_LOCAL_STORRIGE, IS_LOG_IN, IS_LOG_OUT} from "../action-types";

const initialState = {loggedIn: false, token: '', user: ''}

export const userReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case GET_TOKEN_FROM_LOCAL_STORRIGE: {
      return {...state, token: payload}
    }

    case IS_LOG_IN: {
      return payload
             ? {...state, loggedIn: true, token: payload.token, user: payload}
             : {...state, loggedIn: false}
    }

    case IS_LOG_OUT: {
      localStorage.clear()
      return {...state, loggedIn: false, token: '', user: ''}
    }

    default: {
      return state
    }
  }
}
