// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkMw0C1cKdiNXdAwZluVLVSnNAE8Hb9AY",
  authDomain: "netflix-clone-9ed2b.firebaseapp.com",
  projectId: "netflix-clone-9ed2b",
  storageBucket: "netflix-clone-9ed2b.appspot.com",
  messagingSenderId: "35400383002",
  appId: "1:35400383002:web:17fa0303430bc6e0deafa3",
  measurementId: "G-FH78BW3LXF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }