import type { ThunkAction, Action, CaseReducer, PayloadAction } from '@reduxjs/toolkit'

import store from 'store'


export type T_RootState = ReturnType<typeof store.getState>
export type T_AppThunk<ReturnType = void> = ThunkAction<ReturnType, T_RootState, unknown, Action<string>>
export type T_Reducer<S, A = any> = CaseReducer<S, PayloadAction<A>>
