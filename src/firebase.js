import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDSlWAqbfbzPWwL1spsDzc6FvON2C0xzhw',
  authDomain: 'react-slack-clone-cfb67.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-cfb67.firebaseio.com',
  projectId: 'react-slack-clone-cfb67',
  storageBucket: 'react-slack-clone-cfb67.appspot.com',
  messagingSenderId: '591165248580',
  appId: '1:591165248580:web:bead84beef29449ecd1811',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
