import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBVOfbVc6JTzps8oroH4LP0yQy0IgYB_zg",
  authDomain: "airbnb-2-d18e7.firebaseapp.com",
  projectId: "airbnb-2-d18e7",
  storageBucket: "airbnb-2-d18e7.appspot.com",
  messagingSenderId: "631121950885",
  appId: "1:631121950885:web:c1e0d1d90338fe027a754c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}