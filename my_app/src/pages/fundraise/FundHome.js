// import React, { useEffect, useState } from 'react'
// import './FundHome.css'
// import { projectFirestore } from '../../firebase/Config'
// import { Link } from 'react-router-dom'
// import FundList from '../../components/FundList'

// export default function FundHome() {
//   const [data,setData] = useState(null)
//   const [isPending,setIsPending] = useState(false)
//   const [error,setError] = useState(false)


//   useEffect(()=>{
//     setIsPending(true)

//     const unsub = projectFirestore.collection('funds').onSnapshot((snapshot)=>{
//       if (snapshot.empty){
//         setError('No Funds to load')
//         setIsPending(false)
//       } else {
//         let results = []
//         snapshot.docs.forEach(doc => {
//           results.push({id:doc.id , ...doc.data()})
//         })
//         setData(results)
//         setIsPending(false)
//       }
//     },(err )=> {
//       setError(err.message)
//       setIsPending(false)
//     })

//     return () => unsub();
//   },[])
  
 
//   return (
//     <div className='fundHome'>
     
    
//         <section >
//             <div class="raise-funds">
//          <h3>Together, We Can Make a Difference </h3>
//          <h4>Join hands with us to empower the lives of the underprivileged.</h4>
//          <p>No matter the treatment, no matter the cost,
//              raise money for your medical treatment online.</p>
//              <div class="btn">
//                 <button class="btn-pink"><Link to="/raisefund" ><p>Raise fund</p></Link></button>
//               </div>
//             </div>       
//           </section> 
// <br/>

// {error && <p className='error'>{error}</p>}
//       {isPending && <p className='loading'>Loading</p>}

     
      
//       {data && <FundList funds={data}/>}

      
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import './FundHome.css'
import { projectFirestore } from '../../firebase/Config'
import { Link } from 'react-router-dom'
import FundList from '../../components/FundList'

export default function FundHome() {
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)
const description = "Together, We Can Make a Difference"

  useEffect(()=>{
    setIsPending(true)

    const unsub = projectFirestore.collection('funds').onSnapshot((snapshot)=>{
      if (snapshot.empty){
        setError('No Funds to load')
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
    <div className='fundHome'>
     
    
        <section >
            <div class="raise-funds">
          <div className='quote'>
         <h3 className='line1'>Empower Dreams, Ignite Change </h3>
         <h5 className='line2'>Together, We Can Make a Difference!</h5>
         <div class="btn">
                <button class="btn-pink"><Link to="/raisefund" ><p>START A FUNDRAISER</p></Link></button>
              </div>
         </div>
            </div>       
          </section> 

        <div className='abt'>
          <div className='info-heading'>
           <h1>Causes that need your urgent attention</h1> 
          </div>
        <div className='info'>
        Join our vibrant community of visionaries, innovators, and changemakers, as we come together to fund and support the projects that matter most.<br/> Whether it's launching a new product, supporting a social cause, or turning dreams into reality, our platform connects passionate creators with a global audience ready to make an impact.
        </div>
        </div>
      <br/><br/>
{error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading</p>}

     
      
      {data && <FundList funds={data}/>}

      
    </div>
  )
}
