import {configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counterSlice";

export const store = configureStore({          //configureStore() dosen't require the typed declaration because it's been imported.
    reducer:{
        counter: counterSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>       //export the type for the state.

export type AppDispatch = typeof store.dispatch     //export the type for the dispatch.