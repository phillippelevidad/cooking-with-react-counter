import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log('Render App')
  const [theme, setTheme] = useState('red')
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        <h1>Counter</h1>
        <Counter initialCount={0} />
        <h1>Counter Hooks</h1>
        <CounterHooks initialCount={2} />
        <button onClick={() => setTheme(prev => {
          return prev === 'red' ? 'blue' : 'red'
        })}>Change theme</button>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
