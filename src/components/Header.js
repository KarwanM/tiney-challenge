import React from 'react'
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <header>
      <Link to="tiney-challenge/" className='active'>DailyLog</Link>
      <Link to="tiney-challenge/history">History</Link>
    </header>
  )
}


export default Header