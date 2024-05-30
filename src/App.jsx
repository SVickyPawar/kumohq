import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Info from './components/Info/Info'
import ProductTour from './components/ProductTour/ProductTour'
import Subscription from './components/Subscription/Subscription'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Homepage/>
     <Info/>
     <ProductTour/>
     <Subscription/>
     <GeneralInfo/>
    </>
  )
}

export default App
