
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyASROn5ff2M_0uBo-8ByPzcZwORdZDNmNU",
  authDomain: "netflix-clone-621b1.firebaseapp.com",
  projectId: "netflix-clone-621b1",
  storageBucket: "netflix-clone-621b1.firebasestorage.app",
  messagingSenderId: "307226341166",
  appId: "1:307226341166:web:99a0320be1671f555a94bf"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    toast.success("Successfully signed up");
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Successfully logged in");
  } catch (error) {
    console.error(error.message);
    toast.error("Invalid email/password");
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.warn("Logged out successfully");
  } catch (error) {
    console.error(error.message);
    toast.error("Error logging out");
  }
};

export {auth, db, login, signup, logout};