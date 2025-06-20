import React from 'react'
import './Navbar.css'
const Navbar = ({city,oncityChange,onSearh}) => {
   
  return (
    <nav>
        <h1>WeatherSnap</h1>
        <input type="text" value={city} onChange={(e)=> oncityChange(e.target.value)} placeholder='Enter city' />
        <button onClick={onSearh}>Search</button>
    </nav>
  )
}

export default Navbar