import {
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  FOLLOW_CHOSEN_USER,
  FAVORITE_CHOSEN_ARTICLE
} from "../action-types";

const initialState = {posts: {}, chosenPost: {}, pagination: 0}

export const postReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case GET_GLOBAL_POSTS: {
      // console.log(payload)
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
