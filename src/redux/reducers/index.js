import {combineReducers} from "redux";
import {signInReducer} from "./sign-in";
import {signUpReducer} from "./sign-up";
import {userReducer} from "./user";
import {homePageReducer} from "./home-page";
import {postReducer} from "./post";


export const reducer = combineReducers({
  signIn: signInReducer,
  signUpr: signUpReducer,
  homePage: homePageReducer,
  user: userReducer,
  post: postReducer
})