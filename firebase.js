// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9F9_FoQ8oaalfXXuJ4N12Vhy6onbXFqs",
  authDomain: "test-app-9d1b8.firebaseapp.com",
  databaseURL: "https://test-app-9d1b8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-app-9d1b8",
  storageBucket: "test-app-9d1b8.appspot.com",
  messagingSenderId: "1070667080410",
  appId: "1:1070667080410:web:863a5441b356dd49f43be3",
  measurementId: "G-QCCBYLJ624"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
