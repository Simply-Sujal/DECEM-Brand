import React from 'react'
import DiscountHeader from './Components/DiscountHeader'
import Navbar from './Components/Navbar'
import ItemsInfo from './Components/ItemsInfo'

const App = () => {
  return (
    <div className='w-full bg-[#fafafa]'>
      <DiscountHeader />
      <Navbar />
      <ItemsInfo />
    </div>
  )
}

export default App
