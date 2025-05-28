import { useState } from "preact/hooks";

export default function Counter(){
    let [count,setcount]=useState(0);
    let incCount= ()=>{
        setcount(count+1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}