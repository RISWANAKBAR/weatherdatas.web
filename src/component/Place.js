import React from 'react'
import './place.css';
import {TireRepair} from '@mui/icons-material/';
import moment from 'moment'
import {Brightness7} from '@mui/icons-material/';
import {Brightness4} from '@mui/icons-material/';

export default function  ({cityf}) {
  console.log(cityf)
 
  return (
    <div className='row' >
       <div className='place12'>
           <center>
            <div className='extra1'></div>
             <h1 id='h1'>{cityf.cityname} {cityf.countryname} </h1>
        <h5 id='h1'> {moment(cityf.dt).format('dddd')} {moment(cityf.dt*1000).format( " Do MMM ")}  </h5>
        <p id='h1'>Population: {cityf.population}</p>
        </center>
     
        </div>
      
        <div className='temp12'>
        <div className='extra'></div>
        <h6 id='bb'> <span style={{color:'orangered'}}> <Brightness7/></span> {cityf.sunRise}AM</h6> <h6 id='bb'> <Brightness4/> {cityf.sunSet}PM</h6>
       <img src={`https://openweathermap.org/img/wn/${cityf.icon}@2x.png`} id='img12'  />
        
        <h1 id='h1'> {cityf.temp}°C </h1>
        <h5 id='h1'> {cityf.des}</h5>
        <p id='h1'>Pressure: {cityf.pressure}hpa, Humidity:{cityf.humidity}%, Windspeed:{cityf.windspeed}m/s </p><br/>
     
       
        </div>
        
     </div>
  )
}
