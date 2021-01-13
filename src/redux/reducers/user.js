import {GET_ERROR_ON_TOKEN, GET_USER_ON_TOKEN, IS_LOG_IN, IS_LOG_OUT} from "../action-types";

const initialState = {loggedIn: false, token: '', user: '', error: ''}

export const userReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case GET_USER_ON_TOKEN: {
      return {...state, user: payload, token: payload.token, loggedIn: true}
    }

    case GET_ERROR_ON_TOKEN: {
      return payload
        ? {...state, user: '', loggedIn: false, token: '', error: true}
        : {...state, user: '', loggedIn: false, token: '', error: payload}
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
