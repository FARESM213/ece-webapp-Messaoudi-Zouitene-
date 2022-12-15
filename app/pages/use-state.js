import React, { useState } from 'react';
const a={
  b: [
    { c:1},
    { d: 3}
  ],
}
const A =({value})=> <div>{value}</div>

export default function Example() {

    const [count, setCount] = useState(0);

    console.log(a.b[0])
   // console.log([a.b])

  //  const B= <A value='jack' />
  //  return (

  //      <div>
  //          <A value='sfdgchvjhbnkl,'/>
  //          {B}
  //      </div>
  //  )
    
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}