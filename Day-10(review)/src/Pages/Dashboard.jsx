import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Header from '../Components/Header/Header'
import Footer from '../footer/Footer'
const Dashboard = () => {
    const user=useSelector(selectUser)
  return (
    <div>
        <Header/>
        <p className='text-center'> 
            Welcome  !!
        </p>
        <Footer/>
    </div>
  )
}

export default Dashboard