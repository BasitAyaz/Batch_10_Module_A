// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  ref,
  set,
  getDatabase,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp1_3QF1sjMnDIYTnYAuhhNtYLczKbQdE",
  authDomain: "smit-test-6d83c.firebaseapp.com",
  databaseURL: "https://smit-test-6d83c-default-rtdb.firebaseio.com",
  projectId: "smit-test-6d83c",
  storageBucket: "smit-test-6d83c.appspot.com",
  messagingSenderId: "79837734061",
  appId: "1:79837734061:web:8ce681fdff573fe3211224",
  measurementId: "G-1XS71L73QN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();

var model = {};

var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signUp = function (e) {
  e.preventDefault();
  model.email = email.value;
  model.userName = userName.value;
  model.password = password.value;
  console.log(model);
  createUserWithEmailAndPassword(auth, model.email, model.password)
    .then(function (res) {
      console.log(res.user.uid, "Success Response");
      model.id = res.user.uid;
      var refernce = ref(database, `users/${model.id}`);
      set(refernce, model)
        .then(function (dbRes) {
          alert("User Created Succesfully");
        })
        .catch(function (dbErr) {
          alert(dbErr.message);
        });

      email.value = "";
      userName.value = "";
      password.value = "";
    })
    .catch(function (err) {
      console.log(err, "Error Response");
      alert(err.message);
    });
};
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//   } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";