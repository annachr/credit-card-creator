import cardDataReducer from './cardDataReducer'
import activeStyleReducer from './activeStyleReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  cardDataReducer,
  activeStyleReducer
})

export default rootReducer
