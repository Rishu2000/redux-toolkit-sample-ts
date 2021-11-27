import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

//For initialState
interface CounterState {
    value:number
}

const initialState: CounterState = {
    value:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state) => {
            state.value += 1;
        },
        decrement:(state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const {incrementByAmount, increment, decrement} = counterSlice.actions

//It might come in handy sometimes.
export const selectCount = (state : RootState) => state.counter.value

export default counterSlice.reducer;