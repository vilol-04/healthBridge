
import { useState } from 'react';
import './App.css';

function App() {
  const[amount, setAmount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount== ''){
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
    <div className="App">
      <h2>Razorpay Payment Integration</h2>
      <br/>
    <input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
    <br/>
    <button onClick={handleSubmit}>submit</button>
    </div>
    

  );
}

export default App;
