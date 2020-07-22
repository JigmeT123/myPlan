import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOXFwlTsGp71aZQh9TQ-xj3EK_8NE5e5I",
    authDomain: "myplan-3859b.firebaseapp.com",
    databaseURL: "https://myplan-3859b.firebaseio.com",
    projectId: "myplan-3859b",
    storageBucket: "myplan-3859b.appspot.com",
    messagingSenderId: "513052875792",
    appId: "1:513052875792:web:9373fdf4eee45534393e95",
    measurementId: "G-D15Q23DY7C"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;