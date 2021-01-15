import {
  CHOSE_TAG, CLEAR_POSTS,
  FAVORITE_CHOSEN_ARTICLE,
  FOLLOW_CHOSEN_USER, GET_CHOSEN_TAG_POSTS,
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  SET_ACTIVE_PAGINATION,
  SHOW_FEED
} from "../action-types";

export const showFeed = (value) => ({type: SHOW_FEED, payload: value})

export const getGlobalPosts = (value) => ({type: GET_GLOBAL_POSTS, payload: value})
export const getChosenTagPosts = (value) => ({type: GET_CHOSEN_TAG_POSTS, payload: value})
export const getChosenPost = (value) => ({type: GET_ONE_POST, payload: value})
export const choseTag = (value) => ({type: CHOSE_TAG, payload: value})
export const clearPosts = () => ({type: CLEAR_POSTS})

export const followChosenUser = () => ({type: FOLLOW_CHOSEN_USER})
export const favoriteChosenArticle = () => ({type: FAVORITE_CHOSEN_ARTICLE})

export const setActivePagination = (value) => ({type: SET_ACTIVE_PAGINATION, payload: value})
