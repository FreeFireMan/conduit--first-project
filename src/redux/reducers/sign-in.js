import {CLICK_SIGN_IN, INPUT_VALUE_EMAIL, INPUT_VALUE_PASS} from "../action-types";

const initialState = {email: '', password: '', user: {email: "", password: ""}}

export const signInReducer = (state = initialState, action) => {

  const {email, password, user} = state
  const {payload} = action

  switch (action.type) {

    case INPUT_VALUE_EMAIL: {
      return {...state, email: payload}
    }

    case INPUT_VALUE_PASS: {
      return {...state, password: payload}
    }

    case CLICK_SIGN_IN: {
      console.log(user)
      return {...state, user: {email, password}}
    }

    default: {
      return state
    }
  }
}