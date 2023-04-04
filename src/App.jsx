import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import PriceLIst from './Component/PriceList/PriceLIst'
import Dashboard from './Component/Dashboard/Dashboard'
import PhoneBar from './Component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">     
    <NavBar></NavBar>
    <PriceLIst></PriceLIst>
    <Dashboard></Dashboard>
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
