import {GET_ERROR_ON_TOKEN, GET_USER_ON_TOKEN, IS_LOG_IN, IS_LOG_OUT, LOADING_LS} from "../action-types";

const initialState = {loggedIn: false, token: '', user: '', error: '', loading: false}

export const userReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case LOADING_LS: {
      return {...state, loading: true}
    }

    case GET_USER_ON_TOKEN: {
      return {...state, user: payload, token: payload.token, loggedIn: true, loading: false}
    }

    case GET_ERROR_ON_TOKEN: {
      return payload
        ? {...state, user: '', loggedIn: false, token: '', error: true, loading: false}
        : {...state, user: '', loggedIn: false, token: '', error: payload, loading: false}
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
