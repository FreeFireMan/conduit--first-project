import {
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  FOLLOW_CHOSEN_USER,
  FAVORITE_CHOSEN_ARTICLE, SET_ACTIVE_PAGINATION
} from "../action-types";

const initialState = {posts: {}, chosenPost: {}, pagination: 0, paginationActive: 1}

export const postReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

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

    default: {
      return state
    }
  }
}
