import { T_RootState } from 'store/types'

export const selectIsLogged = (state: T_RootState) => state.app.isLogged
export const selectIsAppLoading = (state: T_RootState) => state.app.isAppLoading
