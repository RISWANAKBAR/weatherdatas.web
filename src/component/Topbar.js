import React from 'react'
import './topbar.css';
import {Search} from '@mui/icons-material/';
import Place from './Place';
import Days from './Days';
// 


export default function Topbar({cityc,citye,datat}) {
  console.log(datat)
 
  return (
    <div >
         
      

      
      <div><Place cityf={citye} /></div>
      
    
      
    
    </div>
  )
}
