const initialState = {}

export const errorReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {

    case 'AAAA': {
      return {...state}
    }

    case 'BBBB': {
      return {...state}
    }

    default: {
      return state
    }
  }
}