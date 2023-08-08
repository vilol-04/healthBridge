import React from 'react'
import './Psycologists.css'
import  { useEffect,useState } from 'react'
import {useParams,useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'


import { projectFirestore } from '../../../firebase/Config'


export default function Psycologists() {
  const {id} = useParams()

  const history = useHistory()

  const [psycologist,setPsycologist] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)

    const unsub = projectFirestore.collection('psycologists').doc(id).onSnapshot((doc)=>{
      if (doc.exists){        
        setIsPending(false)
        setPsycologist(doc.data())
      } else {
        setIsPending(false)
        setError('could not find that psycologists')
      }
    })

    return()=> unsub()
    
  },[id])


  useEffect(()=>{
    if(error){
 
      const timer=setTimeout(()=>{
        history.push('/')
      },2000)
      return () => clearTimeout(timer);
    }
 
  },[error,history])
  return (
    <div>
      
    <div className='psycologists'>
      <br/>
      {isPending && <div>Loading...</div>}
      {error && <div className='error'>{error}</div>}
      {psycologist && 
        <div className='card '>
          <div className='scam'>
          <h3>NAME : {psycologist.name}</h3><br/>
          <h5>AGE : {psycologist.age}  </h5> <br/>    
         <h5>GENDER : {psycologist.gender}</h5><br/>
         <h5>AREA OF EXPERTISE : {psycologist.expertise}</h5><br/>
         <h5>EXPERIENCE : {psycologist.experience}</h5><br/>
       <button className='btn btn-light' ><Link to='/registerForTherapy'>Register </Link></button>
        </div>
        </div>
      }
  </div>

    </div>
  )
}
