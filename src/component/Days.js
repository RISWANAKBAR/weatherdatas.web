import React from 'react'
import './day.css';
import moment from 'moment'

export default function Days({datat}) 
{
console.log(datat);

  return (
   
  <div className="container">
     <h1> </h1>
    <div className="wrapper">
   

   {datat.map(fadata=>(

  
    <div className="test1"><div className="card"   id='cardx'>
  <div className="card-body" id='cardx'>
    <h5 className="card-title">{moment(fadata.dt*1000).format('dddd')} </h5><br/>
    <img src={`https://openweathermap.org/img/wn/${fadata.weather[0].icon}@2x.png`} id='img1' />

    <h6 className="card-subtitle mb-2 ">{fadata.temp.max}°C-{fadata.temp.min}°C </h6>
    <p className="card-text">{fadata.weather[0].main}</p>
    <p className="card-text">{fadata.weather[0].description}</p>

    
  </div>
</div></div>
 ))}
 

       

    </div>
    
</div>
  
    
  )
}
