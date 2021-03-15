const initialState = ''


const cardRotateReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_CARD_BACK':
      return state = 'cardAnimation'
    case 'SHOW_CARD_FRONT':
      return state = initialState
    default:
      return state
  }
}

export default cardRotateReducer
