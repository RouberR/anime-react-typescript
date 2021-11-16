
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth, createUserWithEmailAndPassword, 
    onAuthStateChanged, signOut,
     signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfGEk9gjqL5Ci2VZZyPs-S_bpF3hSF4Aw",
  authDomain: "animetopreact.firebaseapp.com",
  projectId: "animetopreact",
  storageBucket: "animetopreact.appspot.com",
  messagingSenderId: "643567091345",
  appId: "1:643567091345:web:4b4bcbadf2880f45af4930",
  measurementId: "G-P570PGGZCV"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth()

const analytics = getAnalytics(app);


export function signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
 }
// Custom Hook

export function useAuth(){
    const [ currentUser, setCurrentUser] = useState();

    useEffect(() => {
       const unsub = onAuthStateChanged(auth, user  => setCurrentUser(user))
        return unsub
    },[])
    
    return currentUser
}


export function logout(){
    return signOut(auth)
}