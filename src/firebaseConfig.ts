// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAskDTP76JMhLaxklXsbhf__tLPJUk9zbc",
  authDomain: "newjakycityhangout.firebaseapp.com",
  projectId: "newjakycityhangout",
  storageBucket: "newjakycityhangout.firebasestorage.app",
  messagingSenderId: "75021965362",
  appId: "1:75021965362:web:59f6a0e26dba3fb565442b",
  measurementId: "G-2T6D4CQPJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);