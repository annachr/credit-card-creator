const initialState = ''

const activeStyleReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_STYLE_ACTIVE':
      return state = 'active'
    case 'CHANGE_STYLE_INACTIVE':
      return state = initialState
    default:
      return state
  }
}

export default activeStyleReducer
