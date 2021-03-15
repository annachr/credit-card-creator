import cardDataReducer from './cardDataReducer'
import activeStyleReducer from './activeStyleReducer'
import cardRotateReducer from './cardRotateReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  cardDataReducer,
  activeStyleReducer,
  cardRotateReducer
})

export default rootReducer
