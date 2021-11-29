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
            disc:"Wikipedia (/ˌwɪkɪˈpiːdiə/ (About this soundlisten) wik-ih-PEE-dee-ə or /ˌwɪki-/ (About this soundlisten) wik-ee-) is a free content, multilingual online encyclopedia written and maintained by a community of volunteers through a model of open collaboration, using a wiki-based editing system.",
            price:300
        },{
            title:"Core Java 2",
            disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quia corrupti fuga aliquam placeat! Sint, quaerat! Qui vitae distinctio sed aliquam est cumque asperiores nemo quasi, odio tenetur saepe in.",
            price:400
        },{
            title:"Core Java 3",
            disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quia corrupti fuga aliquam placeat! Sint, quaerat! Qui vitae distinctio sed aliquam est cumque asperiores nemo quasi, odio tenetur saepe in.",
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