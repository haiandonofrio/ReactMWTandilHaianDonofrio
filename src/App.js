import './App.css';
import Main from './pages/main';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "mwtandil-d2a73.firebaseapp.com",
  projectId: "mwtandil-d2a73",
  storageBucket: process.env.REACT_APP_FIREBASE_STORBUCK,
  messagingSenderId: "92827350662",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-YVJ55MCMQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="contenedor">
      <Main />
    </div>
  );
}

export default App;
