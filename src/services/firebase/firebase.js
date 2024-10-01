// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc, getDocs, doc, getDoc, collection, updateDoc, arrayUnion } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1nNNGS1n4jJv3hyMXQMoTTBq7W1ArV8U",
  authDomain: "my-project-97152-a7883.firebaseapp.com",
  projectId: "my-project-97152-a7883",
  storageBucket: "my-project-97152-a7883.appspot.com",
  messagingSenderId: "666242413793",
  appId: "1:666242413793:web:5f5f693c1db187679673a0",
  measurementId: "G-EP87J6MDTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 


export {
    app, 
    auth,
    db, 
    updateDoc, 
    getDocs, 
    getDoc, 
    collection, 
    getFirestore, 
    setDoc, 
    doc, 
    arrayUnion,
    onAuthStateChanged
}
