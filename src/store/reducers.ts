import { combineReducers } from '@reduxjs/toolkit'

import app from 'features/App/reducer'
import userData from 'features/UserData/reducer'


export default combineReducers({
  app,
  userData,
})
