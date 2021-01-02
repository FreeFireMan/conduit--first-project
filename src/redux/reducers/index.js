import {combineReducers} from "redux";
import {signInReducer} from "./sign-in";
import {signUpReducer} from "./sign-up";
import {userReducer} from "./user";


export const reducer = combineReducers({
  signIn: signInReducer,
  signUpr: signUpReducer,
  user: userReducer
})