import React from 'react'
import { Link } from 'react-router-dom'

import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/Config'

import './FundList.css'
import patient from '../assets/patient.jpeg'

export default function FundList({funds}) {


  if(funds.length === 0){
    return <div className='error'>No Funds</div>
  }

  const handleClick = (id)=>{
    projectFirestore.collection('funds').doc(id).delete()
  }
  return (
    <div className='fundList'>
        {funds.map(fund =>(
<div class="card swiper-slide" key={fund.id} >
                      <div class="image-content">
                          <span class="overlay"></span>
                          <img
                className='delete'
                onClick={()=>handleClick(fund.id)}
                src={Trashcan}/>
                          <div class="card-image">
                              <img src={patient} alt="" class="card-img"/>
                          </div>
                      </div>

                      <div class="card-content">
                      <h3>{fund.title}</h3>
                          <h2 class="name">{fund.name}</h2>
                          <div class="description">{fund.about.substring(0,100)}...</div>
                          
                         

                          <button class="button"><Link to={`/funds/${fund.id}`}>View</Link></button>
                      </div>
                  </div>


        ))}

      

    </div>
  )
}
