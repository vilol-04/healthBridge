import React from 'react'
import './Home.css'
import i1 from './0-percent.png'
import i2 from './allinone.png'

import i4 from './clock.png'
import i5 from './fast.png'

import i9 from './payment.png'
import i10 from './user-friendly.png'
import TypedText from '../../components/TypedText'
import ContactUs from '../../components/ContactUs'



export default function Home() {
   

   
  return (
    <div className='home'>
        
      
        <main>
        <section className="FirstSection" >
            <div className="LeftSection"> 
                We will help you at<span className="name"> 0% fee </span>
               <div> with finding </div>
               <span id="element"><TypedText/></span>
        
            </div>
           
           </section>
<div className="container second" >
  <div className="item">
    <div className="img "><img src={i10} alt=""/> </div>
    <div className="card">                                                             
                   <h2>User-Friendly Dashboard</h2>
                   <p> Easy to use for help related to money, mental and health</p>              
    </div>
    </div>

    <div className="item">
    <div className="img "> <img src={i1} alt=""/>  </div>
    <div className="card">                                                             
                                          
                   <h2>0% Platform Fee</h2>
                   <p>totally free platform</p>
                </div>            
    </div>
   

    <div className="item">
    <div className="img ">  <img src={i9} alt=""/> </div>
    <div className="card">  
                   <h2>All Payments Accepted</h2>
                  <p>Google pay, paytm, UPI, Phone pay, NetBanking & wallets</p>
                </div>                                                         
       
    </div>
  

<div className="item">
<div className="img ">  <img src={i2} alt=""/></div>
<div className="card">  

                   <h2>All in One</h2>
                  <p>you will get financial medical help, will find and mental health help on single platform</p>
                </div>                                                      
   
</div>


<div className="item">
<div className="img "><img src={i4} alt=""/></div>
<div className="card">  

                   <h2>24*7</h2>
                   <p>Personalized Expert Assistance</p>                                                   
   
</div>
</div>

    <div className="item">
    <div className="img ">   <img src={i5} alt=""/></div>
    <div className="card">   
   
                   <h2>Fast</h2>
                   <p>Response of this platform is very fast</p>
                </div>
                       
    </div>
   </div>

       
        

        <section className="faq">
            <h3>Frequently Asked Questions</h3>
           <ul className="accordian">
            <li>
                <input type="radio" name="accordian" id="first"/>
                <label htmlFor="first">Why Health Bridge?</label>
                <div className="content">
                    <p>Health Bridge is
                        conceptualized to the
                        students of college by
                        facilitating easier blood
                        product management,
                        provide support for
                        individuals with mental
                        health needs, and raise a
                        fundraiser for students of
                        weak economical
                        background. We developed a system that
                        integrates blood donation, mental health, and authentic
                        fund raising into a single platform. The system will be
                        designed to streamline the processes, improve coordination
                        and accessibility, and provide real-time updates to all
                        stakeholders.
                        </p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" id="second"/>
                <label htmlFor="second">Tell me more about online medical fundraising?</label>
                <div className="content">
                    <p>Medical fundraising, also known as healthcare fundraising, is the practice of raising funds to cover medical expenses that a person or a family cannot afford on their own. This could include surgeries, treatments, medications, hospital stays, and sometimes travel to and from medical facilities, among other costs. Medical fundraising is common in countries without comprehensive health care coverage or high out-of-pocket costs, like India and the United States. People often turn to medical fundraising when they have exhausted other options, such as insurance and personal savings.
                        
                         
                        </p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" id="third"/>
                <label htmlFor="third">Is raising funds on Health Bridge safe?</label>
                <div className="content">
                    <p>Yes, raising funds for medical expenses on Health Bridge is safe and secure. The platform has several features that ensure the safety and security of its users:

                        Payment security: Health Bridge uses secure payment gateways to process transactions and ensure that all payments are safe and secure. <br/>
                        Data security: Health Bridge uses industry-standard encryption and security measures to protect user data and prevent unauthorized access. <br/>
                        Verification process: Health Bridge verifies the identity and authenticity of all fundraisers to ensure that they are legitimate and trustworthy. <br/>
                        Transparency: Health Bridge is transparent about its fees and charges and provides regular updates to fundraisers about the status of their campaigns.
                        </p>
                </div>
            </li>
            
            <li>
                <input type="radio" name="accordian" id="fourth"/>
                <label htmlFor="fourth">How to join Support Group?</label>
                <div className="content">
                    <p>You first need to register for a particular support group you are willing to be a part of and then join the meet at the specified time and day.
                        </p>
                </div>
            </li>
            
           
            <li>
                <input type="radio" name="accordian" id="sixth"/>
                <label htmlFor="sixth">Tell me more about help related to mental health?</label>
                <div className="content">
                    <p>Health Bridge is there to help the students who experience the onset of mental health and substance use problems or an exacebrationb of their symptoms and students with mental health issues face discrmination and negative attitudes from others. So to overcome this Health Bridge is providing 
                        a platform where students can consult with pyschiatrist , can socialize with others through different clubs provided here and also can chat with people who are facing same issues.
                        </p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" id="seventh"/>
                <label htmlFor="seventh">When will I receive my raised fund?</label>
                <div className="content">
                    <p>You can request a withdrawal once your fundraiser has raised a certain amount. Once Health Bridge verifies your bank details, the funds will be transferred within a few working days. You can request multiple fund withdrawals as and when required.
                        <br/>  Health Bridge Foundation can help raise money to cover your treatment expenses.
                        </p>
                </div>
            </li>
           </ul>
        </section>
<ContactUs/>
    </main>
    </div>
  )
}

