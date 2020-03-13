import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({ initialCount }) {
    console.log('Render CounterHooks')
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
        <>
            <button style={style} onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}