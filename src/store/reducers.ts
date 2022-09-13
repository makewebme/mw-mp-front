import { combineReducers } from '@reduxjs/toolkit'

import app from 'features/App/reducer'
import userData from 'features/UserData/reducer'
import favorites from 'features/Favorites/reducer'


export default combineReducers({
  app,
  userData,
  favorites,
})
