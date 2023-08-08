import React from 'react'
import './raisefund.css'
import { projectFirestore } from '../../firebase/Config'
import {useState} from 'react'

import {useHistory} from 'react-router-dom'

export default function Create() {


  //functions 
  const [title, setTitle] = useState('')
  const [about,setAbout] = useState('')
  const [amount,setAmount] = useState('')
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [phoneNo, setPhoneNo]= useState('')
  const [hospitalName, setHospitalName]= useState('')
  const [hospitalLocation, setHospitalLocation]= useState('')
  const [endDate,setEndDate]= useState('')
  const [address,setAddress]= useState('')
  const [medicalcertificate,setMedicalcertificate]= useState('')
  const [doctor,setDoctor]= useState('')
  const [doctornum,setDoctornum]= useState('')
  const [video,setVideo]= useState('')
  const [hospitalcontact,setHospitalcontact]= useState('')
  const [link, setLink] = useState('')
  const [gender, setGender] = useState('')
  const history = useHistory()


  const handleSubmit = async (e)=>{
    e.preventDefault()
   
         
    const doc ={title ,about , amount: amount+ '$',name,email,link,phoneNo,hospitalName,hospitalLocation,endDate,address,medicalcertificate,doctor,doctornum,video,hospitalcontact,gender}

    try{
      await projectFirestore.collection('funds').add(doc)
      history.push('/fundhome')
    } catch(err) {
      console.log(err)
    }   
  }



  return (
    <div className='raiseFund'> 
    <br/>
    <br/>
    <div className='container'>

      <h2 className='title'>Raise a Fundraiser</h2>
    <br/><br/>
      <form onSubmit={handleSubmit} className='content'>

    {/* personal */}

      <h4>Personal Details</h4>
        <label>
          <span classname='details'>Name</span>
          <input 
          type='text'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          required
          placeholder='Enter Full Name'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Email</span>
          <input 
          type='email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          placeholder='Enter email id'
          />
        </label>
      <br/>
      <label>
          <span classname='details'>Contact </span>
          <input 
          type='number'
          onChange={(e)=>setPhoneNo(e.target.value)}
          value={phoneNo}
          placeholder='Enter contact number'
          />
        </label>
      <br/>
      <label>
          <span classname='details'>Gender</span>
          <input 
          type='text'
          onChange={(e)=>setGender(e.target.value)}
          value={gender}
          required
          placeholder='Enter Gender'
          />
        </label>
      <br/>
        <label>
          <span classname='details'>Address</span>
          <input 
          type='text'
          onChange={(e)=>setAddress(e.target.value)}
          value={address}
          required
          placeholder='Enter Address'
          />
        </label>
        <br/>

{/* documents */}

        <h4>Documents for Authentication</h4>

        <label>
          <span classname='details'>Upload Aadhar Card</span>
          <input 
          type='text'
          onChange={(e)=>setLink(e.target.value)}
          value={link}
          placeholder='Insert Drive link of Aadhar Card'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Upload Medical Certificate</span>
          <input 
          type='text'
          onChange={(e)=>setMedicalcertificate(e.target.value)}
          value={medicalcertificate}
          placeholder='Insert Drive link of Medical Certificate'
          />
        </label>

          <br/>
        <label>
          <span classname='details'>Upload a Video explaining about the condition of patient and fundraising</span>
          <input 
          type='text'
          onChange={(e)=>setVideo(e.target.value)}
          value={video}
          placeholder='Insert Drive link of Video'
          />
        </label>


      {/* hospital details */}

      <h4>Hospital Details</h4>

        <label>
          <span classname='details'>Hospital Name</span>
          <input 
          type='text'
          onChange={(e)=>setHospitalName(e.target.value)}
          value={hospitalName}
          required
          placeholder='Enter Hospital Name'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Hospital Location</span>
          <input 
          type='text'
          onChange={(e)=>setHospitalLocation(e.target.value)}
          value={hospitalLocation}
          required
          placeholder='Enter Address of Hospital'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Contact Number of Hospital</span>
          <input 
          type='number'
          onChange={(e)=>setHospitalcontact(e.target.value)}
          value={hospitalcontact}
          required
          placeholder='Enter Contact Number of Hospital'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Name of Doctor under whom treatment is going on</span>
          <input 
          type='text'
          onChange={(e)=>setDoctor(e.target.value)}
          value={doctor}
          required
          placeholder='Enter Name of Doctor'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Contact Number of Doctor</span>
          <input 
          type='number'
          onChange={(e)=>setDoctornum(e.target.value)}
          value={doctornum}
          required
          placeholder='Enter Contact Number of Doctor'
          />
        </label>
        <br/>
      
      {/* fundraiser details */}

        <h4>Details About Fundraiser</h4>

        <label>
          <span className='details'>Title</span>
          <input 
          type='text'
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required
          placeholder='Enter Title'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>About the fundraiser</span>
          <textarea
          onChange={(e)=>setAbout(e.target.value)}
          value={about}
          required
          placeholder='Write Your Story'
          />
        </label>
        <br/>
        <label>
          <span classname='details'>Minimum Amount required (in $):</span>
          <input 
          type='number'
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
          required
          placeholder='Enter the amount of Fundraiser'
          />
        </label>
        <br/>
         <label>
          <span classname='details'>End Date</span>
          <input 
          type='date'
          onChange={(e)=>setEndDate(e.target.value)}
          value={endDate}
          required
          />
        </label>
        <br/>
        <button className='fund_btn'>Submit</button>
      </form>
      </div>
    </div>
  )
}
