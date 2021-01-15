import {
  CLICK_TO_HEADER_LINK,
  GET_ERROR_ON_TOKEN,
  GET_ERROR_ON_UPDATE_INFO,
  GET_MY_POSTS,
  GET_USER_ON_TOKEN,
  IS_LOG_IN,
  IS_LOG_OUT,
  LOADING_LS,
  UPDATE_INFO
} from "../action-types";

export const IsLogIn = (user) => ({type: IS_LOG_IN, payload: user})
export const IsLogOut = () => ({type: IS_LOG_OUT})
export const getUserOnToken = (value) => ({type: GET_USER_ON_TOKEN, payload: value})
export const getErrorOnToken = (value) => ({type: GET_ERROR_ON_TOKEN, payload: value})
export const updateInfo = (user) => ({type: UPDATE_INFO, payload: user})
export const getErrorOnUpdateInfo = (value) => ({type: GET_ERROR_ON_UPDATE_INFO, payload: value})
export const loadingLS = (value) => ({type: LOADING_LS, payload: value})
export const clickToHeaderLink = () => ({type: CLICK_TO_HEADER_LINK})
export const getMyPosts = (value) => ({type: GET_MY_POSTS, payload: value})


