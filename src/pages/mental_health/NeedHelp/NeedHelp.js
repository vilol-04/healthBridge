import React, { useState } from 'react'
import './NeedHelp.css'
import { projectFirestore } from '../../../firebase/Config'
import {useHistory} from 'react-router-dom'

export default function NeedHelp() {

const [name,setName]= useState('')
const [gender,setGender]= useState('')
const [age, setAge]= useState('')
const [subject,setSubject]= useState('')
const [description,setDescription]= useState('')


  const history = useHistory()


  const handleSubmit = async (e)=>{
    e.preventDefault()
   
         
    const doc ={name,gender,age,subject,description}

    try{
      await projectFirestore.collection('people').add(doc)
      history.push('/Box2')
    } catch(err) {
      console.log(err)
    }
     
        
  }



  return (
    <div className='need_help'>
    <div >
     
      <br/>
      <div className='card-body'>
        <div className='heading'>
        <h2>Book Session </h2>
        </div>
        <div className='form-psyc'>
        <form onSubmit={handleSubmit} className='container'>
         <label>
          <span className='tags col-25'>Name    </span>
          <input className='col-75'
          type='text'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          required
          placeholder='Enter Name'
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Gender    </span>
          <input className='col-75'
          type='text'
          onChange={(e)=>setGender(e.target.value)}
          value={gender}
          required
          placeholder='Enter Gender'
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Age    </span>
          <input className='col-75'
          type='number'
          onChange={(e)=>setAge(e.target.value)}
          value={age}
          required
          placeholder='Enter Age'
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Subject    </span>
          <input className='col-75'
          type='text'
          onChange={(e)=>setSubject(e.target.value)}
          value={subject}
          required
          placeholder='Enter Subject'
          />
        </label>
        <br/>
        <label>
          <span className='tags col-25'>Description    </span>
          <br/>
          <textarea 
          type='text'
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          required
          placeholder='Enter Description'
          />
        </label>
         <br/>
        <button className='btn'>Submit</button>
        </form>
        </div>
        </div>
    </div>
    </div>
  )
}