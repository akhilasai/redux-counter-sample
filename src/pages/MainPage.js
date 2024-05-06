import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { increment,decrement } from '../redux/counter';
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const dispatch = useDispatch();
    const countValue = useSelector((state)=>state);
    

    console.log("count",countValue);
    return (
        <div className="appContainer">
            <h1>Counter</h1>
            <div className="counterContainer">
                <button className="button" onClick={()=>dispatch(decrement())}>-</button>
                <h3 className="count">{countValue.value}</h3>
                <button className="button" onClick={()=>dispatch(increment())}>+</button>
            </div>
        </div>
    )
}

export default MainPage