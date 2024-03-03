
import firebase from "firebase/compat/app";
import "firebase/firestore"
import {initializeApp} from "firebase/app"
import {getFirestore, doc, collection, getDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "attendance-app-e60cd",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};



const app = initializeApp(firebaseConfig)


const database = getFirestore(app)



export {database}