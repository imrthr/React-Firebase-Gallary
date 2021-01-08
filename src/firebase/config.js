import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC6YoGkl9jvnIGSMg9OuMheeo6hfK76xGE",
    authDomain: "photo-gallary-52d66.firebaseapp.com",
    databaseURL: "https://photo-gallary-52d66-default-rtdb.firebaseio.com",
    projectId: "photo-gallary-52d66",
    storageBucket: "photo-gallary-52d66.appspot.com",
    messagingSenderId: "2986766755",
    appId: "1:2986766755:web:0667aed1b49cb07806aa16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
