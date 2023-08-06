import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyDec2eoEAIsABux7V2VAHkbOeu8_wQtuKg",
    authDomain: "my-app-a871d.firebaseapp.com",
    projectId: "my-app-a871d",
    storageBucket: "my-app-a871d.appspot.com",
    messagingSenderId: "446604725852",
    appId: "1:446604725852:web:b7773d46c9e33a56a6a099"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export {projectFirestore,projectAuth}