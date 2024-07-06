import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

export { 
    app, auth
 };
