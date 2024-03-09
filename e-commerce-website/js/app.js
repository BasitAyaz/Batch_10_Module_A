// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Firebase Configuration Object
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

var main = document.getElementById("main");
var products = [];

function renderProducts() {
  main.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    var x = products[i];

    main.innerHTML += `
        <div class="col-md-3">
        <div class="p-2">
          <div class="myCard">
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
