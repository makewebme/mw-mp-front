import { T_RootState } from 'store/types'

export const selectFavorites = (state: T_RootState) => state.favorites
