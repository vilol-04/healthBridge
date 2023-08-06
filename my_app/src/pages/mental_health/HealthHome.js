import React from "react";
import "./healthHome.css";
import { Link } from "react-router-dom";
import SimpleImageSlider from "../../components/SimpleImageSlider";
import MoreCards from "../../components/cards/MoreCards";
import psyc from '../../assets/join-psyc.jpg'
import livechat from '../../components/Mental_health/livechat.png';
import video from '../../components/Mental_health/videocall.png';

import psyc1 from '../../assets/psyc1.jpg'
import psyc2 from '../../assets/psyc2.jpg'
import psyc3 from '../../assets/psyc3.jpg'




export default function HealthHome() {
  return (
    <div className="health_home">
     
      <SimpleImageSlider/>
        
     
    <br/> <br/>
    <div className="info-heading">
    <h1>Seeking Support and Guidance ?<br/>
       Connect with a Compassionate Therapist Today</h1> 
       </div>
    <br/>
    <p>Connect with top psychiatrist and psychologist from <br/> AIIMS & NIMHANS online at your comfortable space on your convenient time. <br/>
     Get the best Psychiatric treatment possible online with Health Bridge.</p>
     <div className="chatting">
     <img src={livechat} className="livechat" alt="livechat"/>
     <img src={video} className="video" alt="video"/>
     </div>
      <div className="type">
        <br/>
        <div className="psycologists_info">

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={psyc1} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h3>B.F. Skinner</h3><br/>
      <p className="small">He is one of history's most famous psychologists. He was a staunch advocate for behaviorism, which made him a dominating force in psychology.</p>
     <button className='btn btn-light' ><Link to='/registerForTherapy'>Register </Link></button>
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={psyc2} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h3>Steven Arthur Pinker </h3><br/>
      <p className="small">He is a Canadian-American cognitive psychologist, psycholinguist, popular science author, and public intellectual. </p>
      <button className='btn btn-light' ><Link to='/registerForTherapy'>Register </Link></button>
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={psyc3} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h3>Albert Bandura OC</h3><br/>
      <p className="small">He was a Canadian-American psychologist who was the David Starr Jordan Professor Emeritus of Social Science in Psychology at Stanford University.</p>
      <button className='btn btn-light' ><Link to='/registerForTherapy'>Register </Link></button>
     
    </div>
  </div>
</div>
</div><br/>

<div className="viewmore">
<div style={{verticalAlign:'center'}}><Link to='/homeNeed'><span>View More</span></Link></div>
</div>

</div>
<br/><br/>

        
      <div className="type">
      <h1>Embark on a Meaningful Journey as a Psychologist <br/>
        Join Our Team Today!</h1>
        <br/><br/>

        <div className="jointeam">
             <div className="fade">
              <img src={psyc}/>
            </div>
            <div className="jointeam-para">
            <p>
            Join our esteemed team as a psychologist. Collaborate with fellow mental health professionals, sharing insights, and working together to create comprehensive treatment plans that address the unique needs of each individual.
            </p>
            
            
              <div className="viewmore-psyc" style={{width:'250px'}}>
<div style={{verticalAlign:'center'}}><Link to='/wantToHelp'><span>Join As Psychologist</span></Link></div>
</div>
             
           
            </div>
            
        </div>
      </div>
      <br/>

     

      <br /><br/>
      <div className="types">
        <div className="social">
        <h1>Join Our Support Group: <br/>
          Together Towards Healing and Growth</h1>
          </div>
        <div className="supportgrp">
         <div className="supp_more_cards"><MoreCards/></div>
        </div>
        
        <div className="viewmore" style={{width:'250px'}}>
<div style={{verticalAlign:'center'}}><Link to='/socialGroups'><span>Join Social Groups</span></Link></div>
</div>
       
      </div>
      
    </div>
  );
}
