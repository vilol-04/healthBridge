import React, { useRef, useState } from 'react';
import './livechat.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDec2eoEAIsABux7V2VAHkbOeu8_wQtuKg",
  authDomain: "my-app-a871d.firebaseapp.com",
  projectId: "my-app-a871d",
  storageBucket: "my-app-a871d.appspot.com",
  messagingSenderId: "446604725852",
  appId: "1:446604725852:web:b7773d46c9e33a56a6a099"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Livechat() {
  
  const [user] = useAuthState(auth);
  
  return (
    <div className="Chat">
      <header>


      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className='sign-in' onClick={signInWithGoogle}><i className="gicon fa-brands fa-google"></i>Sign in with Google</button>

    </>
  )
  }


  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  

  return (
    <div className='chatting-body'>
    
      <main className='texting'> 

        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

      </main>
      
      <form onSubmit={sendMessage} className='message'>
       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message"/>
        <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
      </form>
      
    </div>
    
  )
  }

  function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
