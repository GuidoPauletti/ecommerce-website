import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCnGqCwS4sUSK3ffF18-kRF8ivgWm4i3f4",
    authDomain: "andreapreisz-website.firebaseapp.com",
    projectId: "andreapreisz-website",
    storageBucket: "andreapreisz-website.appspot.com",
    messagingSenderId: "777574999851",
    appId: "1:777574999851:web:e41811546a383da518c76e"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();




