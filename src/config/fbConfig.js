import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyC3-75ljpM93L6-fT_jFf26o9XTYLZYLWA",
    authDomain: "prc-project-8d312.firebaseapp.com",
    databaseURL: "https://prc-project-8d312.firebaseio.com",
    projectId: "prc-project-8d312",
    storageBucket: "prc-project-8d312.appspot.com",
    messagingSenderId: "337728295576",
    appId: "1:337728295576:web:d0ab1b4d37fc3ca95eb6ed",
    measurementId: "G-DGYFS17T6S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });
const storage = firebase.storage();
export { storage, firebase as default }; 