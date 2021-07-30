import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'
import OutlineButton from '../shared/OutlineButton'

const apiKey = 'c5a026ac9ab9526110cc834070c7d60f'

const Forecast = () => {
  let [city, setCity] = useState('')
  let [unit, setUnit] = useState('imperial')
  let [responseObj, setResponseObj] = useState({})
  const uriEncodedCity = encodeURIComponent(city)

  function getForecast () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&appid=${apiKey}`)
    .then(response =>
      response.json())
    .then(response => {
      setResponseObj(response)
    })
    .catch(err => {
    	console.error(err)
    })
  }

  return (
    <div>
      <h1>Find Current Weather Conditions</h1>
      <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <OutlineButton primaryColor='LightSteelBlue' rounded='true' type="submit">Get Forecast</OutlineButton>
            </form>
      <Conditions
        responseObj={responseObj}
        />
    </div>
  )
}

export default Forecast
