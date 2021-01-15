import {
  CHOSE_TAG, CLEAR_POSTS,
  FAVORITE_CHOSEN_ARTICLE,
  FOLLOW_CHOSEN_USER,
  GET_CHOSEN_TAG_POSTS,
  GET_GLOBAL_POSTS,
  GET_ONE_POST,
  SET_ACTIVE_PAGINATION,
  SHOW_FEED
} from "../action-types";

const initialState = {active: "global", posts: {}, chosenTagPosts: {}, chosenPost: {}, pagination: 0, paginationActive: 1, chosenTag: false}

export const postReducer = (state = initialState, action) => {

  const {type, payload} = action

  switch (type) {

    case SHOW_FEED: {
      return {...state, active: payload, chosenTag: false}
    }

    case GET_GLOBAL_POSTS: {
      return {...state, posts: payload, pagination: Math.ceil(payload.articlesCount / payload.articles.length) }
    }

    case GET_CHOSEN_TAG_POSTS: {
      return {...state, chosenTag: payload.tag, chosenTagPosts: payload.posts, active: "chosen",
              pagination: Math.ceil(payload.posts.articlesCount / payload.posts.articles.length) }
    }

    case GET_ONE_POST: {
      return {...state, chosenPost: payload}
    }

    case CLEAR_POSTS: {
      return {...state, posts: ''}
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
