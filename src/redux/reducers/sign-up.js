import {
  CLICK_SIGN_UP,
  INPUT_VALUE_REGISTER_USERNAME,
  INPUT_VALUE_REGISTER_EMAIL,
  INPUT_VALUE_REGISTER_PASS
} from "../action-types";
import postFetch from "../../services/postFetch";

const initialState = {username: '', email: '', password: '', user: {username: '', email: "", password: ""}}

export const signUpReducer = (state = initialState, action) => {

  const {username, email, password} = state
  const {payload} = action

  switch (action.type) {

    case INPUT_VALUE_REGISTER_USERNAME: {
      return {...state, username: payload}
    }

    case INPUT_VALUE_REGISTER_EMAIL: {
      return {...state, email: payload}
    }

    case INPUT_VALUE_REGISTER_PASS: {
      return {...state, password: payload}
    }

    case CLICK_SIGN_UP: {
      const data = {user: {email, password, username}}
      postFetch('/api/users', data)
      return state
    }

    default: {
      return state
    }
  }
}