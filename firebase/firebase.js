
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB2ycVxTAvw6qBbkklreO0Hn5lZ-VGJ8Gs",
  authDomain: "todo-app-a76a4.firebaseapp.com",
  projectId: "todo-app-a76a4",
  storageBucket: "todo-app-a76a4.appspot.com",
  messagingSenderId: "45338968453",
  appId: "1:45338968453:web:3cba573618553520d484ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);