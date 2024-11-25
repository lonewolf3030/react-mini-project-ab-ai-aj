import React, {useState} from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {

  const [count, setCount] = useState(0);

  const handleCountIncrease = () => {
    setCount(count + 1)
  }

  const handleCountDecrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
        <h1>ComponentA</h1>

       <ComponentB counter = {count} 
       increaseCount = {handleCountIncrease}
       decreaseCount = {handleCountDecrease}
       />
       
    </div>
  )
}

export default ComponentA