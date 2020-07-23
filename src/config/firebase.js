import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGE_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASURE_ID
} = process.env;

const config = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASURE_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
