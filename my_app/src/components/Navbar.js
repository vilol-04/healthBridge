import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { UseLogout } from '../hooks/UseLogout'
import { UseAuthContext } from '../hooks/UseAuthContext'
// import { useTheme} from '../hooks/useTheme'
//styles
import fundLogo from '../components/icons/crowdsource_FILL0_wght400_GRAD0_opsz48.svg'
import './Navbar.css'
import mlLogo from '../components/icons/psychology_FILL0_wght400_GRAD0_opsz48.svg'
import healthLogo from '../components/icons/healthLogo (2).png'

export default function Navbar() {
  const[fund, setFund] = useState(false);
  const[mental, setMental] = useState(false);
  const { logout } = UseLogout()
  const {user} = UseAuthContext()
      
   
  

  return (
    <nav>
    < div className='navbar'> 
    <br/>
    <br/>
    <Link to='/' ><img className="inverted" src={healthLogo}  ></img></Link>
    <br/> 
    <div className='name_style'>
    {user && (
          <>
          Hello {user.displayName} <br/><br/>
          <p >"Take a step towards a healthier mind today. It's okay to seek help."</p>
         
            
        </>
        )}
        </div>
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
    <div className='fundFlex'>
      <div onMouseEnter={() => setFund(true)}
      onMouseLeave={() => setFund(false)}>
        
    <Link to='/fundhome' className="last"><img className="invert" src={fundLogo} alt='fund raise'/></Link> <br/>
    </div>
    {fund && (
      <div className='label1'>
        Crowdfunding
      </div>
    )}
    </div>


    <div className='healthFlex'>
    <div onMouseEnter={() => setMental(true)}
    onMouseLeave={() => setMental(false)}>
    <Link to='/mentalhealth' className="last"><img className="invert" src={mlLogo}/></Link>  <br/>  
    </div>
    
    {mental && (
      <div className='label2'>
        Mental Health
      </div>
    )}
    </div>
    </div>   
    
    <div className="btn-group" role="group" aria-label="Basic example">
    <button className='nav-buttons'><Link to='/signup'>SignUp</Link></button>
    <br/>
    <button className='nav-buttons'><Link to='/login'>Login</Link></button>
    <br/>
    <button className='nav-buttons' onClick={logout}> Logout </button> 
    </div> 
    
      
       
    </div>
    </nav>
  )
}
