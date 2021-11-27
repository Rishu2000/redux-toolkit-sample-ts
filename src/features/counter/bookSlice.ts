import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type bookType = {
    title: string,
    disc:string,
    price: number
}

interface initialStateType {
    books: bookType[];
}

const initialState: initialStateType = {
    books:[
        {
            title:"Core Java",
            disc:"erthrgefedfbgbgergnfrgegrngfhnrgefwefgngef",
            price:300
        },{
            title:"Core Java 2",
            disc:"erthrgefedfbgbgergnfrgegrngfhnrgefwefgngef",
            price:400
        },{
            title:"Core Java 3",
            disc:"erthrgefedfbgbgergnfrgegrngfhnrgefwefgngef",
            price:500
        }
    ]
}

const slice = createSlice({
    name:"books",
    initialState,
    reducers:{
        addBook : (state,action: PayloadAction<bookType>) => {
            state.books.push(action.payload);
        },
        removeBook : (state,action: PayloadAction<bookType>) => {
            state.books = state.books.filter((book) => book.title !== action.payload.title && book.price !== action.payload.price);
        }
    }
})

export const {addBook, removeBook} = slice.actions;

export default slice.reducer;