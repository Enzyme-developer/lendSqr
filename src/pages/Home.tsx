import React, { useEffect } from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const Home = () => {
  
  return (
    <main>
      <Navbar /> 
      <Sidebar />
      <Cards />
      <Table />
    </main>
  )
}

export default Home