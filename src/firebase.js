import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDWgUyU3ilm9sdYz82yUnYjTfy8kPZG_Is",
  authDomain: "whatsapp-clone-c7141.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c7141.firebaseio.com",
  projectId: "whatsapp-clone-c7141",
  storageBucket: "whatsapp-clone-c7141.appspot.com",
  messagingSenderId: "452362295210",
  appId: "1:452362295210:web:29c1e56f708d779f0dfdd3",
  measurementId: "G-WW8MPHN2VP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db;
