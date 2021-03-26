const initialState = true


const cardRotateReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_CARD_BACK':
      return state = false
    case 'SHOW_CARD_FRONT':
      return state = initialState
    default:
      return state
  }
}

export default cardRotateReducer
