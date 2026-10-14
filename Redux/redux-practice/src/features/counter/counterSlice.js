import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
     name:"counter",
     initialState : {
          count : 0
     },
     reducers : {
          increment : (state) => {
               state.count += 1;
          },
          decrement : (state) => {
               state.count -= 1;
          },
          reset : (state) => {
               state.count = 0
          },
          incrementByAmount : (state, action) => {
               state.count += action.payload
          },
          incrementByInput : (state, action) => {
               state.count += action.payload
          },
          decrementByInput : (state,action) => {
               state.count -= action.payload
          }
     }
})

export default CounterSlice.reducer;
export const {increment, decrement, reset, incrementByAmount, incrementByInput, decrementByInput} = CounterSlice.actions