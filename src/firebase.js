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
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }
  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.log('Error in getUserDocument', error.message);
  }
}

export const signOut = () => {
  auth.signOut();
};
