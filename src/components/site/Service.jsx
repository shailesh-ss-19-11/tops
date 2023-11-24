import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, increaseBy5 } from '../../reduxSlices/CounterSlice';
const Service = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counterSlice)
    return (
        <div>
            Service
            <div className='d-flex justify-content-center gap-5'>
                <button className='btn btn-sm btn-primary' onClick={() => dispatch(increment())}>+</button>
                {counter.count}
                <button className='btn btn-sm btn-danger' onClick={() => dispatch(decrement())}>-</button>
            </div>
            <center>
                <button className='btn btn-sm btn-success' onClick={() => dispatch(increaseBy5(5))}>increment by 5</button>
            </center>
        </div>
    );
}

export default Service;
