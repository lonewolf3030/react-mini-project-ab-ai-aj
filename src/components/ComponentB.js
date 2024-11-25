import React from 'react'

const ComponentB = (props) => {
  return (
    <div>
        <h1>Component B</h1>
        <button onClick={props.increaseCount}>+</button>
           {props.counter}
        <button onClick={props.decreaseCount}>-</button>
    </div>
  )
}

export default ComponentB