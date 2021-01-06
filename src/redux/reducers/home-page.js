import {
  SHOW_FEED,
  CHOSE_NAV_LINK,
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  FOLLOW_CHOSEN_USER,
  FAVORITE_CHOSEN_ARTICLE
} from "../action-types";

const initialState = {active: "global", navLinkActive: "home", posts: {}, chosenPost: {}, pagination: 0}

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
      console.log(payload)
      return {...state, posts: payload, pagination: payload.articlesCount / payload.articles.length }
    }

    case GET_ONE_POST: {
      return {...state, chosenPost: payload}
    }

    case FOLLOW_CHOSEN_USER: {
      return {...state, chosenPost: {...state.chosenPost, author:{...state.chosenPost.author, following: true}}}
    }

    case FAVORITE_CHOSEN_ARTICLE: {
      return {...state, chosenPost: {...state.chosenPost, author:{...state.chosenPost.author, following: true}}}
    }

    default: {
      return state
    }
  }
}
