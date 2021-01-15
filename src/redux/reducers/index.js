import {combineReducers} from "redux";
import {userReducer} from "./user";
import {homePageReducer} from "./home-page";
import {postReducer} from "./post";



export const reducer = combineReducers({
  homePage: homePageReducer,
  user: userReducer,
  post: postReducer,
})
