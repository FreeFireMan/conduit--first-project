import {
  CLICK_SIGN_UP,
  INPUT_VALUE_REGISTER_USERNAME,
  INPUT_VALUE_REGISTER_EMAIL,
  INPUT_VALUE_REGISTER_PASS
} from "../action-types";

export const ClickSignUp = () => ({type: CLICK_SIGN_UP})
export const InputValueRegisterUsername = (value) => ({type: INPUT_VALUE_REGISTER_USERNAME, payload: value})
export const InputValueRegisterEmail = (value) => ({type: INPUT_VALUE_REGISTER_EMAIL, payload: value})
export const InputValueRegisterPass = (value) => ({type: INPUT_VALUE_REGISTER_PASS, payload: value})