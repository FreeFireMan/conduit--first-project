import {
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  FOLLOW_CHOSEN_USER,
  FAVORITE_CHOSEN_ARTICLE,
  SET_ACTIVE_PAGINATION,
  CHOSE_TAG, SHOW_FEED
} from "../action-types";

const initialState = {active: "global", posts: {}, chosenTagPosts: {}, chosenPost: {}, pagination: 0, paginationActive: 1, chosenTag: false}

export const postReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case SHOW_FEED: {
      return {...state, active: payload}
    }

    case GET_GLOBAL_POSTS: {
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

    case SET_ACTIVE_PAGINATION: {
      return {...state, paginationActive: payload+1, posts: {}}
    }

    case CHOSE_TAG: {
      return {...state, chosenTagPosts: payload.value, chosenTag: payload.tag, active: 'chosen', posts: {}}
    }

    default: {
      return state
    }
  }
}
