import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addBook, bookType, removeBook } from '../features/counter/bookSlice';

const Books: React.FC = () => {

const [titleState, setTitleState] = useState('');
const [discState, setDiscState] = useState('');
const [priceState, setPriceState] = useState('');

const books = useAppSelector((state) => state.books.books);
const dispatch = useAppDispatch();

const book:bookType = {
    title: titleState,
    disc:discState,
    price: +priceState
}

    return (
        <div>
        <div className="m-5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">      {/**flex justify-between flex-wrap */}
            {books.map((book, key) => (
                <div className="flex justify-center">
                    <div key={key} className="border border-gray-300 py-3 px-2 rounded-lg bg-yellow-100" style={{width:"300px"}}>
                            <h2 className="text-3xl font-semibold">{book.title}</h2>
                            <div>{book.disc}</div>
                            <h3 className="text-2xl font-semibold">Price: {book.price}</h3>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <form className="mx-5"> 
                <div className="flex">
                    <input className="flex-none focus:border-light-blue-200 focus:outline-none focus:ring-1 p-2 px-4 rounded border border-gray-300 mx-3" 
                        type="text" 
                        onChange={(e) => setTitleState(e.target.value)}
                        placeholder="Title"/>
                    <input className="flex-1 focus:border-light-blue-200 focus:outline-none focus:ring-1 p-2 px-4 rounded border border-gray-300 mx-3" 
                        type="text" 
                        onChange={(e) => setDiscState(e.target.value)}
                        placeholder="Description"/>
                    <input className="flex-none focus:border-light-blue-200 focus:outline-none focus:ring-1 p-2 px-4 rounded border border-gray-300 mx-3" 
                        type="text" 
                        onChange={(e) => setPriceState(e.target.value)}
                        placeholder="Price"/>
                </div>
                <button className="bg-green-600 p-2 px-10 text-white font-semibold rounded m-3"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(addBook(book))
                    }}
                >Add</button>
                <button className="bg-red-600 p-2 px-10 text-white font-semibold rounded m-3"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeBook(book))
                    }}
                >Remove</button>
            </form>
        </div>
        </div>
    )
}

export default Books
