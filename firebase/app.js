// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
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

var inp = document.getElementById("inp");

window.add = function () {
  var obj = {
    text: inp.value,
  };

  obj.id = push(ref(database, "Tasks/")).key;

  var reference = ref(database, `Tasks/${obj.id}`);

  set(reference, obj);
};

function getData() {
  var reference = ref(database, "Tasks/");

  onValue(reference, function (data) {
    console.log(data.val());
  });
}
getData();
