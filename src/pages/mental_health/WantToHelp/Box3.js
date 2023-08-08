import React from 'react'
import './Box3.css'
import { useHistory } from 'react-router-dom'

export default function Box() {
  const history = useHistory()

  const handleClose=()=>{
    history.push('/mentalhealth')
    
  }
  return (
    <div className='Box-backdrop'>
        <div className='Box'>
            <h2>Success! Your registration has been confirmed.</h2>
            <br/>
            <p>Discover the possibilities that await.</p>
            
           
                     <button onClick={handleClose} class="favorite-styled" type="button">
                        Close
                     </button>
            
        </div>

    </div>
  )
}
