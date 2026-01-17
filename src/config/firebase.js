import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD9HF6byzMGk3NwaghnHMWdBDTnFqUcXO4",

  authDomain: "waylo-app-8c522.firebaseapp.com",

  projectId: "waylo-app-8c522",

  storageBucket: "waylo-app-8c522.firebasestorage.app",

  messagingSenderId: "335174968752",

  appId: "1:335174968752:web:2df17df38634e350912275"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;