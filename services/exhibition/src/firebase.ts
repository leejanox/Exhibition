// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARkXYO_9KPyejkad_DRjVKM7OcR9ZhySY",
    authDomain: "exhibition-fd5e2.firebaseapp.com",
    projectId: "exhibition-fd5e2",
    storageBucket: "exhibition-fd5e2.firebasestorage.app",
    messagingSenderId: "835845083480",
    appId: "1:835845083480:web:d9e18f9bdea209ba8ed52d",
    measurementId: "G-DLRZLX8LXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };
