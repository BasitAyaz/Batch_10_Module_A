// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,

} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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

var main = document.getElementById("main");
var userBox = document.getElementById("userBox");
var userName = document.getElementById("userName");
var products = [];

function renderProducts() {
  main.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    var x = products[i];

    main.innerHTML += `
        <div class="col-md-3">
        <div class="p-2">
          <div onclick="cardClick('${x.id}')" class="myCard">
            <img
              src="${x.imgUrl}"
              width="100%"
              alt=""
            />
            <div class="p-2">
              <h4>${x.title}</h4>
              <p>${x.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <h3>Rs ${x.price}/-</h3>
                <button class="btn btn-dark">
                  <i class="fa-solid fa-cart-arrow-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

function getProduct() {
  var reference = ref(db, `products/`);

  onValue(reference, function (data) {
    console.log(data.val());
    products = Object.values(data.val());
    renderProducts();
  });
}
getProduct();


function checkAuth(){
  onAuthStateChanged(auth, function(user) {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid)

    var userObj = localStorage.getItem("userData")
    userObj = JSON.parse(userObj)

      userBox.style.display = "block"
      userName.innerHTML = userObj.userName
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
checkAuth()



window.logoutUser = function(){
  signOut(auth).then(() => {
    // Sign-out successful.
    localStorage.removeItem("userData")
  }).catch((error) => {
    // An error happened.
  });
}


window.cardClick = function(id){
  localStorage.setItem("productId",id)
  window.location.assign('pages/singleproduct/singleproduct.html')
}