//styles
import styles from './Sign.module.css'
import React, { useState } from 'react'
import { UseSignup } from '../../hooks/UseSignup'



export default function Signup() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const {signup,isPending,error} = UseSignup()

const handleSubmit =(e)=>{
e.preventDefault()
signup(email,password,displayName)
}

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>CREATE YOUR ACCOUNT</h2>
    <div className='card w-100'>
    <label>
      <span>Email</span>
      <input
         type="email"
         onChange={(e)=> setEmail(e.target.value)}
         value={email}
      />
    </label>
    <label>
      <span>Password</span>
      <input
         type="password"
         onChange={(e)=> setPassword(e.target.value)}
         value={password}
      />
    </label>
    <label>
      <span>Display Name</span>
      <input
         type="text"
         onChange={(e)=> setDisplayName(e.target.value)}
         value={displayName}
      />
    </label>
    <br/><br/>
    {!isPending && <button className='btn btn-light'>SignUp</button>}
    {isPending && <button className='btn btn-light' disabled>loading</button>}
    {error && <p>{error}</p>}
    </div>
  </form>
  )
}
