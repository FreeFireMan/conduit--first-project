import {CHOSE_NAV_LINK, SHOW_FEED} from "../action-types";

export const showFeed = (value) => ({type: SHOW_FEED, payload: value})
export const choseNavLink = (value) => ({type: CHOSE_NAV_LINK, payload: value})
