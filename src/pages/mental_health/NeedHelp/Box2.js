import React from 'react'
import './Box2.css'
import { useHistory } from 'react-router-dom'

export default function Box() {
  const history = useHistory()
  const handleClick=()=>{
    history.push('/livechat')
   
  }
  const handleClicks=()=>{
    history.push('/lobby.html')
    window. location. reload()
   
  }
  const handleClose=()=>{
    history.push('/homeNeed')
    
  }
  return (
    <div className='Box-backdrop'>
        <div className='Box'>
            <h2>Success! Your registration has been confirmed.</h2>
            <br/>
            <p>Discover the possibilities that await.</p>
            
            <button onClick={handleClick} class="favorite-styled" type="button">
                        Live Chat
                     </button>
                     <button onClick={handleClicks} class="favorite-styled" type="button">
                        Video Call
                     </button>
                     <button onClick={handleClose} class="favorite-styled" type="button">
                        Close
                     </button>
            
        </div>

    </div>
  )
}
