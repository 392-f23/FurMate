
import { initializeApp, getApps, getApp } from "firebase/app";
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKR0DHhO8TKZsOcYWWsDaGHO3Q-F18e-M",
  authDomain: "furmate-5e0bb.web.app",
  databaseURL: "https://furmate-5e0bb-default-rtdb.firebaseio.com",
  projectId: "furmate-5e0bb",
  storageBucket: "furmate-5e0bb.appspot.com",
  messagingSenderId: "1011118654015",
  appId: "1:1011118654015:web:f08ed151d09bf2e76f6e8a",
  measurementId: "G-90DGGBF7SX"
};

// Initialize Firebase
let firebase;
// Initialize Firebase
if (!getApps().length){
  firebase = initializeApp(firebaseConfig);
}
else {
  firebase = getApp(firebaseConfig)
}
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const signInWithGoogle = async () => {
  let provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  const res = await signInWithPopup(getAuth(firebase), provider);
  console.log(res);
  return res;

};

export const firebaseSignOut = () => signOut(getAuth(firebase));

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};

