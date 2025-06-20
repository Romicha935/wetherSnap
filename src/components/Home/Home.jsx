import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const weather = useSelector((state)=> state.weather.data)

  if(!weather){
    return <p className='home-secttion'>No data available, please search a city</p>
  }
  return (
    <div className='home-section'>
        <h2>{weather.name}, {weather.sys.country}</h2>
         <p>Teamparature: {Math.round(weather.main.temp)} </p>
         <p>Condition: {weather.weather[0].disciption} </p>
         <p>Humidity: {weather.main.humidity} %</p>
         <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Home