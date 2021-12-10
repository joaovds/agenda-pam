import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDxI9Z5iX36zGEDNgxFQddGuW5chKj6R44",
  authDomain: "agenda-3b30d.firebaseapp.com",
  projectId: "agenda-3b30d",
  storageBucket: "agenda-3b30d.appspot.com",
  messagingSenderId: "976768532740",
  appId: "1:976768532740:web:e4d267c126c32f96a81051"
};

if (firebase.app.length !== 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;