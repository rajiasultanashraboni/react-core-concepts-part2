import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    function handleAdd (){
        const newCount = count+1
        setCount(newCount)
    }
    function handleRemove(){
        const newCount= count-1
        setCount(newCount)
    }
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}