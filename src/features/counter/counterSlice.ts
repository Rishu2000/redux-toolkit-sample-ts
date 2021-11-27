import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

//For initialState
interface CounterState {
    value:number
}

const initialState = {
    value:0,
} as CounterState;

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
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})

export const {incrementByAmount, increment, decrement} = counterSlice.actions

//It might come in handy sometimes.
export const selectCount = (state : RootState) => state.counter.value

export default counterSlice.reducer;