import React from 'react'
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <div>
      <Link to="tiney-challenge/">DailyLog</Link>
      <Link to="tiney-challenge/history">History</Link>
    </div>
  )
}


export default Header