import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const UserPage = () => {
  return (
    <main>
    <Navbar /> 
    <Sidebar />
    <Cards />
  </main>
  )
}

export default UserPage