var firebase = require('firebase')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsm-kydGnGxZDNl37lEqxe6CdPrOK_ADA",
    authDomain: "education-app-829f1.firebaseapp.com",
    projectId: "education-app-829f1",
    storageBucket: "education-app-829f1.appspot.com",
    messagingSenderId: "286082938001",
    appId: "1:286082938001:web:ef3b2340d4b79454147b30",
    measurementId: "G-1BB0B8L9F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}


firebase.initializeApp(firebaseConfig)

let database = firebase.database()


database.ref("customPath").set(obj, function(error) {
    if (error) {
        // The write failed...
        console.log("Failed with error: " + error)
    } else {
        // The write was successful...
        console.log("success")
    }
})


database.ref('customPath').once('value')
    .then(function(snapshot) {
        console.log(snapshot.val())
    })