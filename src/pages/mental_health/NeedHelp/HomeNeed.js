import React, { useEffect, useState } from 'react'
import './HomeNeed.css'
import { projectFirestore } from '../../../firebase/Config'
import PsycologistsList from '../../../components/PsycologistsList'



export default function FundHome() {
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)


  useEffect(()=>{
    setIsPending(true)

    const unsub = projectFirestore.collection('psycologists').onSnapshot((snapshot)=>{
      if (snapshot.empty){
        setError('No Psycologists to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id:doc.id , ...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    },(err )=> {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub();
  },[])
  
 
  return (
    <div className='home_need'>
      <br/>
      <br/>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading</p>}
      {data && <PsycologistsList psycologists={data}/>}

      
    </div>
  )
}
