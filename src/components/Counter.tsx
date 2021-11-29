import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

const Counter: React.FC = () => {

const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();
const [val, setVal] = useState('');

    return (
        <div>
            <h2 className="text-3xl font-bold">Count is: {count}</h2>
            <div className="flex justify-center items-center">
            {/* <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button> */}
            <button
                className="bg-green-500 text-white p-2 rounded m-2 px-4"
                onClick={() => dispatch(increment())}
            >Increment</button>
            <button
                className="bg-red-500 text-white p-2 rounded m-2 px-4"
                onClick={() => dispatch(decrement())}
            >Decerement</button>
            <input className="focus:border-light-blue-500 focus:outline-none focus:ring-1 p-2 rounded border border-gray-300 px-4" 
                style={{height:"100%", width:"200px"}} 
                type="number" placeholder="Increment by Number" 
                onChange={(e) => setVal(e.target.value)}/>
            <button
                className="bg-green-500 text-white p-2 rounded m-2 px-4"
                onClick={() => dispatch(incrementByAmount(+val))}
            >Incerement By Number</button>
            </div>
        </div>
    )
}

export default Counter
