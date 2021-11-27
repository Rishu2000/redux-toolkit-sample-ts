import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({          //configureStore() dosen't require the typed declaration because it's been imported.
    reducer:{}
})

export type RootState = ReturnType<typeof store.getState>       

export type AppDispatch = typeof store.dispatch     