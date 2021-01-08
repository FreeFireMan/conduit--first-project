import {CHOSE_NAV_LINK, CHOSE_TAG, SHOW_FEED} from "../action-types";
import doFetch from "../../services/doFetch";

const initialState = {navLinkActive: "home", postsChosenTag: false}

export const homePageReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case CHOSE_NAV_LINK: {
      return {...state, navLinkActive: payload}
    }

    default: {
      return state
    }
  }
}
