import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        increaseBy5: (state, action) => {
            console.log(action.payload)
            state.count += action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, increaseBy5 } = counterSlice.actions

export default counterSlice.reducer