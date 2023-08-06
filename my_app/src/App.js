
import './App.css';
import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";
import { UseAuthContext } from './hooks/UseAuthContext';

import Navbar from './components/Navbar';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import NeedHelp from './pages/mental_health/NeedHelp/NeedHelp';

import RaiseFund from './pages/fundraise/RaiseFund';
import FundHome from './pages/fundraise/FundHome';

import Fund from './pages/fundraise/Fund';

import HealthHome from './pages/mental_health/HealthHome';


import WantToHelp from './pages/mental_health/WantToHelp/WantToHelp'
import { useState } from 'react';
import HomeNeed from './pages/mental_health/NeedHelp/HomeNeed'
import Psycologists from './pages/mental_health/NeedHelp/Psycologists';
import Box3 from './pages/mental_health/WantToHelp/Box3'

import Perf from './pages/mental_health/SocialGroups/Perf'
import Home from './pages/HomePage/Home'
import Register from './pages/mental_health/Register';
import Box from './pages/mental_health/Box';
import Box2 from './pages/mental_health/NeedHelp/Box2'
import Livechat from './components/Livechat';
import Razorpay from './components/Razorpay';

import smart from './components/icons/smart_toy_FILL0_wght400_GRAD0_opsz48.svg'
import ChatBot from './components/ChatBot'

function App() {
  const {authIsReady,user} = UseAuthContext()
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
    <BrowserRouter>
    
      <Navbar/>
      <div className='chat_logo' onClick={toggleComponent}><img src={smart}/></div>
       {isOpen && <ChatBot/>}
      <div className='main'>
        <Switch>

        <Route exact path='/'> 
        <Home/>
      </Route>
      
      <Route path='/signup'> 
      {user && <Redirect to='/'/>}    
      {!user && <Signup/>}
       
      </Route>

      <Route path='/login'>
      {user && <Redirect to='/'/>}    
      {!user && <Login/>}
      
        
      </Route>
      <Route path='/registerForTherapy'>
            <NeedHelp />
          </Route>
          <Route path='/razorpay'>
            <Razorpay />
          </Route>
        
          <Route path='/raisefund'>
            <RaiseFund />
          </Route>
          <Route path='/livechat'>
            <Livechat />
          </Route>
          <Route path='/Box'>
            <Box />
          </Route>
          <Route path='/Box2'>
            <Box2 />
          </Route>
          <Route path='/homeNeed'>
            <HomeNeed />
          </Route>

          <Route path='/mentalhealth'>
            <HealthHome />
          </Route>
          <Route path='/fundhome'>
            <FundHome />
          </Route>
          <Route path='/funds/:id'>
            <Fund/>
          </Route>
          <Route path='/psycologists/:id'>
            <Psycologists/>
          </Route>
         
          <Route path='/Box3'>
            <Box3 />
          </Route>
          <Route path='/socialGroups'>
            <Perf />
          </Route>
          <Route path='/wantToHelp'>
            <WantToHelp />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/perf'>
            <Perf />
          </Route>
        </Switch>
       
        </div>
        
    </BrowserRouter>
    </div>
    

  );
}

export default App;






