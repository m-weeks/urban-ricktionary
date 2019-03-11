import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAcxQGm-sGh91iwT_ncxZwDPz7c3pXKxE8",
  authDomain: "urban-ricktionary.firebaseapp.com",
  databaseURL: "https://urban-ricktionary.firebaseio.com",
  projectId: "urban-ricktionary",
  storageBucket: "urban-ricktionary.appspot.com",
  messagingSenderId: "40894311176"
});

export default app;
