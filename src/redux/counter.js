import { createSlice, configureStore } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:state=>{
            state.value += 1
        },
        decrement:state=>{
            state.value -= 1
        }
    }
})

export const {increment,decrement} = CounterSlice.actions;

const store = configureStore({
    reducer : CounterSlice.reducer
})

export default store;