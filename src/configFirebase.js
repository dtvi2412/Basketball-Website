import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsSTXneQKNXlfUHwzYKE1wsjxTur3FfT8",
    authDomain: "basketball-a3551.firebaseapp.com",
    databaseURL: "https://basketball-a3551.firebaseio.com",
    projectId: "basketball-a3551",
    storageBucket: "basketball-a3551.appspot.com",
    messagingSenderId: "966776528813",
    appId: "1:966776528813:web:10da8d9dec12920c818b24",
    measurementId: "G-86QGYJ781J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;

