import { combineReducers } from 'redux'

import doctor from './doctor'
import appointment from './appointment'
import review from './review'
import user from './user'

const rootReducer = combineReducers({
  appointment,
  doctor,
  review,
  user,
})

export default rootReducer
