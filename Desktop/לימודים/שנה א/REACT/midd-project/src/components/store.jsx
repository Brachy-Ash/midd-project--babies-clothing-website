import { configureStore } from '@reduxjs/toolkit'
import phoneStyleReducer from '../features/phoneStyle/phoneStyleSlice'
import callsReducer from '../features/calls/callsSlice'
export const store = configureStore({
  reducer: {
    phoneStyle: phoneStyleReducer,
    calls:callsReducer
  },
})
