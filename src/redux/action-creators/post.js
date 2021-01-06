import {
  FAVORITE_CHOSEN_ARTICLE,
  FOLLOW_CHOSEN_USER,
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  SET_ACTIVE_PAGINATION
} from "../action-types";

export const getGlobalPosts = (value) => ({type: GET_GLOBAL_POSTS, payload: value})
export const getChosenPost = (value) => ({type: GET_ONE_POST, payload: value})

export const followChosenUser = () => ({type: FOLLOW_CHOSEN_USER})
export const favoriteChosenArticle = () => ({type: FAVORITE_CHOSEN_ARTICLE})

export const setActivePagination = (value) => ({type: SET_ACTIVE_PAGINATION, payload: value})