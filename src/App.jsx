import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setCity } from './features/weather/weatherSlice'

function App() {
  const dispatch = useDispatch()
  const city = useSelector((state)=> state.weather.city)

  const handleSearch = ()=> {
    dispatch(fetchWeather(city))
  }

  const handleCityChange = (value) => {
     dispatch(setCity(value))
  }

  return (
   <div>
    <Navbar city={city} oncityChange={handleCityChange} onSearh={handleSearch} />
    <Home/>
   </div>
  )
}

export default App
