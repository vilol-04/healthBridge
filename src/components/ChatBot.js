import react from 'react';
import ChatBot from 'react-simple-chatbot';
import './ChatBot.css'

import {Segment} from 'semantic-ui-react';



export default function Chatbot() {
  
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Health Bridge',
      trigger: "Ask Name"
    },
    {
      id: 'Ask Name',
      message:'Please enter your name',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}. Please select the issues you are facing',
      trigger: 'issues'
    },
    {
      id: 'issues',
      options: [
        {value: "Unable to Raise Funds", label: "Unable to Raise Funds", trigger: "Unable to Raise Funds"}, 
        {value: "Failed to book Appointment with Psycologists", label: "Failed to book Appointment with Psycologists", trigger: "Failed to book Appointment with Psycologists"},
        {value: "Trust issues in donating", label: "Trust issues in donating", trigger: "Trust issues in donating"}, 
        {value: "Scheduling for Support Group", label: "Scheduling for Support Group", trigger: "Scheduling for Support Group"},
      
      ],
      trigger: 'communicate'
      
    },
  
    {
      id: 'Unable to Raise Funds',
      message: 'There may be a problem with the authentication of documents and details that you have uploaded. Increase your chance of getting funds by providing more legal documents and details',
      trigger: 'communicate'
    },
    {
      id: 'Failed to book Appointment with Psycologists',
      message:'If you are unable to reach a psycologist, leave a message or send an email to our website stating your interest in booking an appointment. Be clear about your availability and preferred dates, so they can better accommodate your needs.',
      trigger: 'communicate'
    },
     {
        id: 'Trust issues in donating',
        message:'We understand your concern regarding this issue. But do not worry, all the projects are verified. Project creators provide detailed information about their funding goals and how the funds will be used to facilitate transparency',
        trigger: 'communicate'
      },
      {
        id: 'Scheduling for Support Group',
        message:'If you failed to schedule for a particular support group at a slot then you can schedule for it at next upcoming slot as every social group organizes its meeting atleast twice in a week.',
        trigger: 'communicate'
      },
  
    
      {
      id: 'communicate',
        message: 'Have we cleared your doubts?',
        trigger: 'confirm'
      },
      {
      id: 'confirm',
      options: [
        {value: "Yes", label: "Yes", trigger: "Yes"}, 
        {value: "No", label: "No", trigger: "No"},
      ],
    },
    {
      id: 'Yes',
      message:'Glad to know. Thankyou for reaching out to us!',
      end: true
    },
    {
      id: 'No',
      message:'Please select your issue',
      trigger: 'issues'
    },
  
  ]

{/* <button class="sc-bxivhb ipSaXD rsc-os-option-element">Unable to Raise Funds</button> */}
  return ( 
  <>
  <Segment floated="right">
  
     <div style={{width:'100%'}}><ChatBot
      steps={steps}
       /></div>
  
  </Segment>
  </>
  );
}




