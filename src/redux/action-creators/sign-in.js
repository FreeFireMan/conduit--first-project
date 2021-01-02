import {CLICK_SIGN_IN, INPUT_VALUE_EMAIL, INPUT_VALUE_PASS} from "../action-types";

export const InputValueEmail = (value) => ({type: INPUT_VALUE_EMAIL, payload: value})
export const InputValuePass = (value) => ({type: INPUT_VALUE_PASS, payload: value})
export const ClickSignIn = () => ({type: CLICK_SIGN_IN})