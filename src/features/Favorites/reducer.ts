import { createReducer, createAction, PayloadAction, AnyAction } from '@reduxjs/toolkit'

import { I_Favorites } from './types'


const initialState: I_Favorites = []


const addToFavoritesAction = createAction<number>('FAVORITES/add')
const removeFromFavoritesAction = createAction<number>('FAVORITES/remove')

const favoritesReducer = createReducer(initialState, (builder) => {
  // Add to favorites
  builder.addCase(
    addToFavoritesAction,
    (state: any, action: PayloadAction<number>) => [ ...state, action.payload ]
  )

  // Remove from favorites
  builder.addCase(
    removeFromFavoritesAction,
    (state: any, action: PayloadAction<number>) => (
      state.filter((favoriteId: number) => favoriteId !== action.payload)
    )
  )
})


export const addToFavorites = (favoriteId: number): AnyAction => (
  addToFavoritesAction(favoriteId)
)

export const removeFromFavorites = (favoriteId: number): AnyAction => (
  removeFromFavoritesAction(favoriteId)
)


export default favoritesReducer
