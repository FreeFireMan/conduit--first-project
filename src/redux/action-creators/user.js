import {FAVORITE_CHOSEN_ARTICLE, FOLLOW_CHOSEN_USER, IS_LOG_IN, IS_LOG_OUT} from "../action-types";

export const IsLogIn = () => ({type: IS_LOG_IN})
export const IsLogOut = () => ({type: IS_LOG_OUT})
export const followChosenUser = () => ({type: FOLLOW_CHOSEN_USER})
export const favoriteChosenArticle = () => ({type: FAVORITE_CHOSEN_ARTICLE})