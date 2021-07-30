import React from 'react'

const Conditions = (props) => {
  return (
     <div>
         {props.responseObj.cod === 200 ?
             <div>
                 <h2>Location: <strong>{props.responseObj.name}</strong></h2>
                 <h3>Temperature: {Math.round(props.responseObj.main.temp)} degrees</h3>
                 <h3>Feels like: {Math.round(props.responseObj.main.feels_like)} degrees</h3>
                 <h3>Conditions: {props.responseObj.weather[0].description}</h3>
                 <h3>Humidity: {props.responseObj.main.humidity}%</h3>
             </div>
         : null
         }
     </div>
  )
}

export default Conditions
