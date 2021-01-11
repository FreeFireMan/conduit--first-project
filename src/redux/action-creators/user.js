import {GET_TOKEN_FROM_LOCAL_STORRIGE, IS_LOG_IN, IS_LOG_OUT} from "../action-types";

export const IsLogIn = (user) => ({type: IS_LOG_IN, payload: user})
export const IsLogOut = () => ({type: IS_LOG_OUT})
export const getTokenFromLocalStorrige = () => ({type: GET_TOKEN_FROM_LOCAL_STORRIGE})
