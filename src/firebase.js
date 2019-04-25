import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyA5mbA7usPKmj1obz5hK-69Yy1XP2X_zjg",
    authDomain: "resume-generator-754e7.firebaseapp.com",
    databaseURL: "https://resume-generator-754e7.firebaseio.com",
    projectId: "resume-generator-754e7",
    storageBucket: "resume-generator-754e7.appspot.com",
    messagingSenderId: "398049642940"
};

firebase.initializeApp(config);

export default firebase;
