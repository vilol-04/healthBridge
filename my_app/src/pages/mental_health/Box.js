import React from 'react'
import './Box.css'
import { useHistory } from 'react-router-dom'

export default function Box() {
  const history = useHistory()
  const handleClick=()=>{
    history.push('/lobby.html')
    window. location. reload()
  }
  const handleClose=()=>{
    history.push('/socialGroups')
    
  }
  return (
    <div className='Box-backdrop'>
        <div className='Box'>
            <h2>Success! Your registration has been confirmed.</h2>
            <br/>
            <p>Discover the possibilities that await.</p>
            
            <button onClick={handleClick} className="favorite-styled" type="button">
                        MeetUp
                     </button>
                     <button onClick={handleClose} className="favorite-styled" type="button">
                        Close
                     </button>
            
        </div>

    </div>
  )
}
