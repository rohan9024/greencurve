import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDm3Ic-fUn6r5jScaMruBMjb_MPKi7m4rY",
  authDomain: "sample-b8a46.firebaseapp.com",
  projectId: "sample-b8a46",
  storageBucket: "sample-b8a46.appspot.com",
  messagingSenderId: "17061956333",
  appId: "1:17061956333:web:ac3e492c9e5a4f0eed5ae4",
  measurementId: "G-TPBZZEMNPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);