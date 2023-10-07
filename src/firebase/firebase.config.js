// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUoyLqqwj3DT0Ohjgla1xk4539ADtrT4g",
  authDomain: "goldsmith-new-collocation.firebaseapp.com",
  projectId: "goldsmith-new-collocation",
  storageBucket: "goldsmith-new-collocation.appspot.com",
  messagingSenderId: "803374562527",
  appId: "1:803374562527:web:0f6a26475865b7ff557d6a",
  measurementId: "G-FKXBD7PDHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
