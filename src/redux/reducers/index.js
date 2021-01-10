import {combineReducers} from "redux";
import {userReducer} from "./user";
import {homePageReducer} from "./home-page";
import {postReducer} from "./post";
import {errorReducer} from "./error";


export const reducer = combineReducers({
  homePage: homePageReducer,
  user: userReducer,
  post: postReducer,
  error: errorReducer
})
