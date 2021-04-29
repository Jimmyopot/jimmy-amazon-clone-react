import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBYc8Hexkd0qxtEJvqDjfsMM5t3Yv3Rqd4",
    authDomain: "jimmy-opot--clone-20ff8.firebaseapp.com",
    projectId: "jimmy-opot--clone-20ff8",
    storageBucket: "jimmy-opot--clone-20ff8.appspot.com",
    messagingSenderId: "751587926318",
    appId: "1:751587926318:web:7fe1dc125dd831f9dc5abf",
    measurementId: "G-W87GHB1Z0G"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }