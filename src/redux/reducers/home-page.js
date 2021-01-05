import {SHOW_FEED, CHOSE_NAV_LINK, GET_GLOBAL_POSTS, GET_ONE_POST} from "../action-types";

const initialState = {active: "global", navLinkActive: "home", posts: {}, chosenPost: {}}

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
    case GET_ONE_POST: {
      return {...state, chosenPost: payload}
    }

    default: {
      return state
    }
  }
}
