import logo from './logo.svg';
import './App.css';
import Topbar from './component/Topbar';
import { useState } from 'react';
import Loader from './component/Loader';
import Days from './component/Days';


function App() {


  const [data,setData] = useState({
    city:"",
    country:{},
    day:[],
    error:false,
    loading:false

  })

   const onInputChange=(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(data);
   setData({
    ...data,
    city:e.target.value
  })
  //  console.log(data)
  


 }
  const searchcity=()=>{
    setData({
      ...data,
     loading:true
 })
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${data.city}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
    .then(resp=>resp.json())
    .then(response=>{
      console.log("response==>",response)
      const newdate=new Date()
      console.log(newdate)

      const sunRise= new Date(response.list[0].sunrise*1000).toLocaleTimeString().slice(0,4)
      const sunSet= new Date(response.list[0].sunset*1000).toLocaleTimeString().slice(0,4)

       const details={
        cityname:response.city.name,
        countryname:response.city.country,
        population:response.city.population,
        temp:response.list[0].temp.max,
        des:response.list[0].weather[0].description,
         pressure:response.list[0].pressure,
        humidity:response.list[0].humidity,
        windspeed:response.list[0].speed,
        dt:response.list[0].dt,
        icon:response.list[0].weather[0].icon,
        sunRise,
        sunSet 
       }
       setData({
        ...data,
        country:details,
        day:response.list,
        loading:false,
        error:false

      })

       
       

      
       })
     .catch(err=>{
      console.log(err)
     
      setData({
        ...data,
       error:true
      })  }) 

     
   
     console.log(data)   
 }

  return (
    
    
    <div className="App" >
      
        <input className='inp' placeholder='Enter the city' name='city'onChange={onInputChange} />
        
        <button onClick={searchcity}> click</button>
        <h4> </h4>
  
      
    
        {data.error==true? <h4 id='errr'> !!!City not found!!!</h4>:<> {data.country.cityname==undefined?null:
      <>
       <Topbar  cityc={data.city} citye={data.country}  />
       <Days  datat={data.day} />
       </>
       }</>}

      

      
      {data.loading==true? <Loader/>:<></>}

      {/* <Loader/> */}
    </div>
  
  
  );
}

export default App;
