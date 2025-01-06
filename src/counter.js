import React, {useState} from 'react';

function counter() {
    const [counter, setCounter] = useState(0);
  
    const incrementCounter = () => {
      setCounter((prevCounter) => prevCounter + 1);
    };
  
    return (
      <div>
        <p>Counter: {counter}</p>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    );
}
export default counter;