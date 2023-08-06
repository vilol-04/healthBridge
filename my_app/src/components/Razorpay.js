
import { useState } from 'react';
import './razorpay.css';

export default function Razorpay() {
  const[amount, setAmount] = useState('');
  const [name,setName]= useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount===''){
      alert("please enter amount");
    }else{
      var option = {
        key: "rzp_test_PfUkxoqYtZlSRR",
        key_secret: "ZhjXZlQCBqKCQfngwqGbY0Kc",
        amount: amount*100,
        currency:"INR",
        name: "Health Bridge",
        description: "for testing",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "abc",
          email: "abc@gmail.com",
          contact: "2733902032"
        },
        notes: {
          address: "razorpay corporate office"
        },
        theme: {
          color: "#3397cc"
        }
      };
      var pay = new window.Razorpay(option);
      pay.open()

    }
  }
  return (
    // <div className="card-body">
    //   <h2>Make a secure donation</h2>
    //   <br/>

    // <input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
    // <br/>
    // <button onClick={handleSubmit}>Submit</button>
    // </div>
    <div className='card-body'>
      <h2>Make a Secure Donation</h2>
      
        <form onSubmit={handleSubmit} className='container '>
         <label>
          <span className='tags col-25'>Name    </span>
          <input className='col-75' 
          type='text'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          required
          placeholder='Enter Full Name'
          />
        </label>
        <br/>
       
        <br/>
        <label>
          <span className='tags col-25'>Contact    </span>
          <input className='col-75'
          type='number'
          onChange={(e)=>setContact(e.target.value)}
          value={contact}
          required
          placeholder='Enter Contact Number'
          />
        </label>
        <br/>
        
        <br/>
        <label>
          <span className='tags col-25'> Email   </span>
          <br/>
          <input
          type='email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required
          placeholder='Enter Email Id'
          />
        </label>
        <br/>
        
        <br/>
        <label>
        <span className='tags col-25'> Amount   </span>
        <input type='number' placeholder='Enter Amount' value={amount} required onChange={(e)=>setAmount(e.target.value)}/>
        </label>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>




  );
}


