import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderTable from './RenderTable'
import TestTable from './TestTable'
import MuiTable from './MuiTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RenderTable/>
      <TestTable/> */}
      <MuiTable/>
    </>
  )
}

export default App
