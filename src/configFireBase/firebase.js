import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWxl12VMlC9gBohBVCuAGkDFYUf5Zm_r8",
  authDomain: "auth-75661.firebaseapp.com",
  projectId: "auth-75661",
  storageBucket: "auth-75661.appspot.com",
  messagingSenderId: "953825071588",
  appId: "1: 953825071588: web: a93d942baf842121ab77f1",
  measurementId: "G-24XQY35S6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
