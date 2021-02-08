import firebase from "firebase/app";
import 'firebase/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STR_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyCKiAKqKqtitEOH2jiTJPYm0w7bj0imwAQ",
    authDomain: "auth-test-32b4f.firebaseapp.com",
    projectId: "auth-test-32b4f",
    storageBucket: "auth-test-32b4f.appspot.com",
    messagingSenderId: "514278589989",
    appId: "1:514278589989:web:bb7d7f49d66adf900ba1cc"
})


export const auth = app.auth()
export default app