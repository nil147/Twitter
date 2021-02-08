import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAf6WFfoFFAQTtLH8_dw_erMk0oRNbqaAc",
  authDomain: "twitter-a1271.firebaseapp.com",
  projectId: "twitter-a1271",
  storageBucket: "twitter-a1271.appspot.com",
  messagingSenderId: "973356747016",
  appId: "1:973356747016:web:48712d392b380b816644bd",
  measurementId: "G-082PXJ1CR3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;