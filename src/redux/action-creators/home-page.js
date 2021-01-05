import {CHOSE_NAV_LINK, GET_GLOBAL_POSTS, GET_ONE_POST, SHOW_FEED} from "../action-types";

export const showFeed = (value) => ({type: SHOW_FEED, payload: value})
export const choseNavLink = (value) => ({type: CHOSE_NAV_LINK, payload: value})
export const getGlobalPosts = (value) => ({type: GET_GLOBAL_POSTS, payload: value})
export const getChosenPost = (value) => ({type: GET_ONE_POST, payload: value})