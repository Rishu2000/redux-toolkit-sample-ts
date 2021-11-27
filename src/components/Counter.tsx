import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

const Counter: React.FC = () => {

const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();
const [val, setVal] = useState('');

    return (
        <div>
            <h2>Count is: {count}</h2>
            <button
                onClick={() => dispatch(increment())}
            >Increment</button>
            <button
                onClick={() => dispatch(decrement())}
            >Decerement</button>
            <input type="number" placeholder="Increment by Number" onChange={(e) => setVal(e.target.value)}/>
            <button
                onClick={() => dispatch(incrementByAmount(+val))}
            >Incerement By Number</button>
        </div>
    )
}

export default Counter
