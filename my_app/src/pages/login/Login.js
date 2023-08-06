//styles
import styles from './Login.module.css'
import React, { useState } from 'react'
import { UseLogin } from '../../hooks/UseLogin'

export default function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {login,error,isPending} = UseLogin()
 

const handleSubmit =(e)=>{
e.preventDefault()
login(email,password)
}

  return (
    
    <div className='login-pg'>
      <div className='col-1'>
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2 >WELCOME TO HEALTH BRIDGE</h2>
    <br/><br/>
      
      
        <div className='login-form'>
      <label>
        <span>
          Email</span>
        <input 
           type="email"
           onChange={(e)=> setEmail(e.target.value)}
           value={email}
           placeholder='Enter Email'
        />
      </label>
      </div>
      <div className='login-form'>
      <label>
        <span>
          Password</span>
          
        <input 
           type="password"
           onChange={(e)=> setPassword(e.target.value)}
           value={password}
           placeholder='Enter Password'
        />
      </label>
      </div>
    <br/><br/>
  

      {!isPending && <button className='btn btn-light'>Login</button>}
    {isPending && <button className='btn btn-light' disabled>loading</button>}
      {error && <p>{error}</p>}
      
    </form>
    </div>
      
      
    </div>
    
  )
}

