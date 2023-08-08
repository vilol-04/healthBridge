import React, { useState } from 'react'
import './WantToHelp.css'
import { projectFirestore } from '../../../firebase/Config'
import {useHistory} from 'react-router-dom'

export default function NeedHelp() {

const [name,setName]= useState('')
const [gender,setGender]= useState('')
const [age, setAge]= useState('')
const [expertise,setExpertise]= useState('')
const [experience,setExperience]= useState('')
const [idCard,setIdCard] = useState('')


  const history = useHistory()


  const handleSubmit = async (e)=>{
    e.preventDefault()
   
         
    const doc ={name,gender,age,expertise,experience,idCard}

    try{
      await projectFirestore.collection('psycologists').add(doc)
      history.push('/Box3')
    } catch(err) {
      console.log(err)
    }    
        
  }
  return (
    <div className='want_to_help'>
        <br/>
        <br/>
        <div className='heading'>
        <h2>Join the Team</h2>
        </div>
        <br/>
      <div className='card-body'>
        <form onSubmit={handleSubmit} className='container '>
         <label>
          <span className='tags col-25'>Name    </span>
          <input className='col-75' 
          type='text'
          placeholder='Enter Your Name'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          required
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Gender    </span>
          <input  className='col-75'
          type='text'
          placeholder='Enter your Gender'
          onChange={(e)=>setGender(e.target.value)}
          value={gender}
          required
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Age    </span>
          <input className='col-75'
          type='number'
          placeholder='Enter your Age'
          onChange={(e)=>setAge(e.target.value)}
          value={age}
          required
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Specialization    </span>
          <input className='col-75'
          type='text'
          placeholder='Enter your Area of Expertise'
          onChange={(e)=>setExpertise(e.target.value)}
          value={expertise}
          required
          />
        </label>
        <br/>
        <label>
          <span >ID Card  </span>
          <br/>
          <input 
          type='text'
          placeholder='Drive Link Of Id Card'
          onChange={(e)=>setIdCard(e.target.value)}
          value={idCard}
          required
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'> Experience    </span>
          <br/>
          <textarea 
          type='text'
          placeholder='Share Your Experience'
          onChange={(e)=>setExperience(e.target.value)}
          value={experience}
          required
          />
        </label>
        <br/>
        <button className='btn'>Submit</button>
        </form>
        </div>
    </div>
  )
}
