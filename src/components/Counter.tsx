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
            <div className="d-flex justify-content-center align-items-center">
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatch(increment())}
            >Increment</button>
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatch(decrement())}
            >Decerement</button>
            <input className="form-control" style={{height:"100%", width:"200px"}} type="number" placeholder="Increment by Number" onChange={(e) => setVal(e.target.value)}/>
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatch(incrementByAmount(+val))}
            >Incerement By Number</button>
            </div>
        </div>
    )
}

export default Counter
