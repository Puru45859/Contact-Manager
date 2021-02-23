// import * as firebase from "firebase";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB6Wv6SNZjujDOaWJaHnwkRs9BT3hCsbuM",
  authDomain: "react-crud-e0561.firebaseapp.com",
  databaseURL: "https://react-crud-e0561-default-rtdb.firebaseio.com",
  projectId: "react-crud-e0561",
  storageBucket: "react-crud-e0561.appspot.com",
  messagingSenderId: "1016376924196",
  appId: "1:1016376924196:web:b1c09d9b669b962b0860b1",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
