import cardDataReducer from './cardDataReducer'
import activeStyleReducer from './activeStyleReducer'
import cardRotateReducer from './cardRotateReducer'
// import formDataReducer from './formDataReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  cardDataReducer,
  activeStyleReducer,
  cardRotateReducer,
  // formDataReducer
})

export default rootReducer
