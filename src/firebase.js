import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCrT2cqH85Ryd9bIa8nr6A0Wbzu6T_0qzE",
    authDomain: "react-slack-faedb.firebaseapp.com",
    databaseURL: "https://react-slack-faedb.firebaseio.com",
    projectId: "react-slack-faedb",
    storageBucket: "react-slack-faedb.appspot.com",
    messagingSenderId: "1063708133014",
    appId: "1:1063708133014:web:48c6718c2f34aa5d"
};
firebase.initializeApp(firebaseConfig);

export default firebase;