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
        <div className="m-5 d-flex justify-content-between flex-wrap">
            {books.map((book, key) => (
                <div key={key} className="alert alert-info mx-5" style={{width:"300px"}}>
                        <h2>{book.title}</h2>
                        <p>{book.disc}</p>
                        <h3>Price: {book.price}</h3>
                </div>
            ))}
        </div>
        <div>
            <form className="mx-5"> 
                <div className="d-flex">
                    <input className="form-control mx-3" type="text" 
                        onChange={(e) => setTitleState(e.target.value)}
                        placeholder="Title"/>
                    <input className="form-control mx-3" type="text" 
                        onChange={(e) => setDiscState(e.target.value)}
                        placeholder="Description"/>
                    <input className="form-control mx-3" type="text" 
                        onChange={(e) => setPriceState(e.target.value)}
                        placeholder="Price"/>
                </div>
                <button className="btn btn-primary m-3"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(addBook(book))
                    }}
                >Add</button>
                <button className="btn btn-danger m-3"
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
