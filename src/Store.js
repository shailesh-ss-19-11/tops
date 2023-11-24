import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './reduxSlices/CounterSlice'

export const store = configureStore({
  reducer: {
    counterSlice
  },
})