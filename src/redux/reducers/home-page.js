import {SHOW_FEED, CHOSE_NAV_LINK} from "../action-types";

const initialState = {active: "global", navLinkActive: "home"}

export const homePageReducer = (state= initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SHOW_FEED: {
        return {...state, active: payload}
    }
    case CHOSE_NAV_LINK: {

      return {...state, navLinkActive: payload}
    }
    default: {
      return state
    }
  }
}
