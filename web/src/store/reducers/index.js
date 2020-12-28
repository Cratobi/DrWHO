import { combineReducers } from 'redux'

import doctor from './doctor'
import temp from './temp'

const rootReducer = combineReducers({
  doctor,
  temp,
})

export default rootReducer
