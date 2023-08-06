import React from 'react'
import { Link } from 'react-router-dom'

import { projectFirestore } from '../firebase/Config'
import psycc from '../assets/psycc.png'

import './PsycologistsList.css'

export default function PsycologistsList({psycologists}) {


  if(psycologists.length === 0){
    return <div className='error'>No Psycologists</div>
  }


  return (
    <div >
      <h1>CONSULT TOP PSYCHOLOGISTS</h1>
      <br/>
      <div className='psycologist-list'>
        {psycologists.map(psycologist =>(
            <div key={psycologist.id} className='card'>
               
               <div className="photo">
                              <img src={psycc} alt="" className="photos"/>
                          </div>
          
                <h3>{psycologist.name}</h3>
                <p>Area of Expertise: {psycologist.expertise}</p>
                
                <div>{psycologist.experience.substring(0,100)}...</div>
                <Link to={`/psycologists/${psycologist.id}`}>View</Link>
               
                </div>
              
        ))}
     
  </div>
    </div>
  )
}
