// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {
    getStorage,
    ref as strRef,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIoW1lNh-ZGAjRxgfrNwuSoooEniFS1Eo",
    authDomain: "e-commerce-9083a.firebaseapp.com",
    databaseURL: "https://e-commerce-9083a-default-rtdb.firebaseio.com",
    projectId: "e-commerce-9083a",
    storageBucket: "e-commerce-9083a.appspot.com",
    messagingSenderId: "178354230683",
    appId: "1:178354230683:web:3facae34406c833c6e3d3e",
    measurementId: "G-ET4E2S5BGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();
const storage = getStorage();

var userName = document.getElementById('userName')
var email = document.getElementById('email')
var password = document.getElementById('password')

window.signupUser = function () {
    var obj = {
        userName: userName.value,
        email: email.value,
        password: password.value
    }
    console.log(obj)
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (res) {
            console.log("User Created Successfully",res)

            obj.id = res.user.uid

            var reference = ref(db,`users/${obj.id}`)
            set(reference,obj).then(function(){
                console.log("User Added in Database")
            }).catch(function(dbError){
                console.log("Database Error",dbError)
            })
        }).catch(function(err){
            console.log(err)
        })
}