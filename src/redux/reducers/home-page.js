import {SHOW_FEED} from "../action-types";

const initialState = {active: "global"}

export const homePageReducer = (state= initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SHOW_FEED: {
        return {...state, active: payload}}
    default: {
      return state
    }
  }
}
