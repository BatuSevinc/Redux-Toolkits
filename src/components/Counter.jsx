import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../redux/counter/counterSlice'

const Counter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{count}</h2>  
      <div>
        <button onClick={() => dispatch(incrementByAmount(11))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter