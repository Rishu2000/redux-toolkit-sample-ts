import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decrement, increment, incrementByAmount } from './counterSlice';

const Counter: React.FC = () => {

const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();

const handleIncrementClick:React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(increment());
}

const handleDecrementClick:React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(decrement());
}

const handleIncByNum:React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(incrementByAmount(23));
}

    return (
        <div>
            <h2>Count is: {count}</h2>
            <button
                onClick={handleIncrementClick}
            >Increment</button>
            <button
                onClick={handleDecrementClick}
            >Decerement</button>
            <button
                onClick={handleIncByNum}
            >Incerement By 23</button>
        </div>
    )
}

export default Counter
