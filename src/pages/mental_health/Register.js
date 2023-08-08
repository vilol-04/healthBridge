import React from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";


export default function Register() {
  const history = useHistory()
  const handleClick=()=>{ 

        history.push('/Box')
  
  
 
  }
  return (
    <div className="register">
      <form action="">
        <div className="container">
          <h1>Register</h1>

          <hr />

          <label htmlFor="email">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            required
          />
          <br />
          <label htmlFor="age">
            <b>Age</b>
          </label>
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            id="age"
            required
          />
          <br />
          <label>
            {" "}
            
          </label>
          <br />
          <label htmlFor="supportgrp">
            <b>Gender:</b>
          </label>
          <select id="grp" name="grp">
            <option value="depression">Male</option>
            <option value="anxiety">Female</option>
            <option value="addiction">Other</option>
          </select>
         
    
           <br />
          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <br />
          <label htmlFor="supportgrp">
            <b>Select the Support Group:</b>
          </label>
          <select id="grp" name="grp">
            <option value="depression">Depression</option>
            <option value="anxiety">Anxiety</option>
            <option value="addiction">Addiction</option>
            <option value="parenting">Parenting</option>
            <option value="suicide">Suicide Loss</option>
            <option value="sleep">Sleep</option>
            <option value="chronic">Chronic Illness</option>
            <option value="eating">Eating Disorder</option>
            <option value="general">General</option>
          </select>
          <br />
          <br />
          <label htmlFor="date">
            <b>Select the date:</b>
          </label>
          <input type="date" name="date" id="date" required />
          <br />
          <label htmlFor="supportgrp">
            <b>Select the time slot:</b>
          </label>
          <select id="time" name="time">
            <option value="depression">11:30am-1:30pm</option>
            <option value="anxiety">2:30pm-3:30pm</option>
            <option value="addiction">5:30pm-7:30pm</option>
          </select>
          <br />
          <br />
          <button type="submit" onClick={handleClick} className="registerbtn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
