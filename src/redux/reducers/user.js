
import {
  CLICK_TO_HEADER_LINK,
  GET_ERROR_ON_TOKEN,
  GET_ERROR_ON_UPDATE_INFO,
  GET_USER_ON_TOKEN,
  IS_LOG_IN,
  IS_LOG_OUT,
  LOADING_LS, UPDATE_INFO
} from "../action-types";


const initialState = {loggedIn: false, token: '', user: '', errors: '', loading: false, save: false}

export const userReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case LOADING_LS: {
      return {...state, loading: payload}
    }


    case GET_USER_ON_TOKEN: {
      return {...state, user: payload, token: payload.token, loggedIn: true, loading: false}
    }

    case GET_ERROR_ON_TOKEN: {
      return payload
             ? {...state, user: '', loggedIn: false, token: '', errors: true, loading: false}
             : {...state, user: '', loggedIn: false, token: '', errors: payload, loading: false}
    }

    case UPDATE_INFO: {
      return {...state,token: payload.token, user: payload, errors: false, save: true}
    }

    case GET_ERROR_ON_UPDATE_INFO: {
      return {...state, errors: payload}
    }

    case IS_LOG_IN: {
      return payload
             ? {...state, loggedIn: true, token: payload.token, user: payload, errors: false}
             : {...state, loggedIn: false}
    }

    case IS_LOG_OUT: {
      localStorage.clear()
      return {...state, loggedIn: false, token: '', user: ''}
    }

    case CLICK_TO_HEADER_LINK: {
      return {...state, save: false, errors: false}
    }

    default: {
      return state
    }
  }
}
