import {SHOW_FEED, CHOSE_NAV_LINK, GET_GLOBAL_POSTS} from "../action-types";

const initialState = {active: "global", navLinkActive: "home", posts: {}, urlChosenPost:''}

export const homePageReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {
    case SHOW_FEED: {
      return {...state, active: payload}
    }

    case CHOSE_NAV_LINK: {
      return {...state, navLinkActive: payload}
    }

    case GET_GLOBAL_POSTS: {
      return {...state, posts: payload}
    }

    default: {
      return state
    }
  }
}
