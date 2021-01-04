import {
  CLICK_SIGN_UP,
  INPUT_VALUE_REGISTER_USERNAME,
  INPUT_VALUE_REGISTER_EMAIL,
  INPUT_VALUE_REGISTER_PASS
} from "../action-types";

const initialState = {username: '', email: '', password: '', user: {username: '', email: "", password: ""}}

export const signUpReducer = (state = initialState, action) => {

  const {username, email, password, user} = state
  const {payload} = action

  switch (action.type) {

    case INPUT_VALUE_REGISTER_USERNAME: {
      console.log(payload)
      return {...state, username: payload}
    }

    case INPUT_VALUE_REGISTER_EMAIL: {
      console.log(payload)
      return {...state, email: payload}
    }

    case INPUT_VALUE_REGISTER_PASS: {
      console.log(payload)
      return {...state, password: payload}
    }

    case CLICK_SIGN_UP: {
      console.log(user)
      return {...state, user: {username, email, password}}
    }

    default: {
      return state
    }
  }
}