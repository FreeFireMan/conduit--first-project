import {GET_ERROR_ON_TOKEN, GET_USER_ON_TOKEN, IS_LOG_IN, IS_LOG_OUT, LOADING_LS} from "../action-types";

export const IsLogIn = (user) => ({type: IS_LOG_IN, payload: user})
export const IsLogOut = () => ({type: IS_LOG_OUT})
export const getUserOnToken = (value) => ({type: GET_USER_ON_TOKEN, payload: value})
export const getErrorOnToken = (value) => ({type: GET_ERROR_ON_TOKEN, payload: value})
export const loadingLS = (value) => ({type: LOADING_LS, payload: value})

