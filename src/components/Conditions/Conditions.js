import React from 'react'

const Conditions = (props) => {
  return (
     <div>
         {props.responseObj.cod === 200 ?
             <div>
                 <p><strong>{props.responseObj.name}</strong></p>
                 <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}. Humidity is {props.responseObj.main.humidity}% and it feels like {Math.round(props.responseObj.main.feels_like)} degrees.</p>
             </div>
         : null
         }
     </div>
  )
}

export default Conditions
