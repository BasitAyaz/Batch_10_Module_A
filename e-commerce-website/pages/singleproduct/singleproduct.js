// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
    onValue,

} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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

var productImage = document.getElementById('productImage')
var productTitle = document.getElementById('productTitle')
var productDescription = document.getElementById('productDescription')
var productPrice = document.getElementById('productPrice')


var productId = localStorage.getItem("productId")

function checkAuth() {
    onAuthStateChanged(auth, function (user) {
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


window.logoutUser = function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.removeItem("userData")
    }).catch((error) => {
        // An error happened.
    });
}

var productResponse;
function getProduct() {
    var reference = ref(db, `products/${productId}`)

    onValue(reference, function (data) {
        productResponse = data. val()
        console.log(productResponse)

        productImage.src = productResponse.imgUrl
        productTitle.innerHTML = productResponse.title
        productDescription.innerHTML = productResponse.description
        productPrice.innerHTML = productResponse.price

    })

}
getProduct()


window.placeOrder = function () {
    var loginUser = localStorage.getItem("userData")
    if (!loginUser) {
        alert("User Must be Login to Place Order")
        window.location.assign('../login/login.html')
    }else{

        var user = JSON.parse(localStorage.getItem("userData"))
        var obj = {
            userName : user.userName,
            userEmail : user.email,
            image: productResponse.imgUrl,
            productTitle: productResponse.title,
            productPrice: productResponse.price
        }

        obj.id = push(ref(db,'orders/')).key
        var reference = ref(db,`orders/${obj.id}`)


        set(reference,obj).then(function(){
            alert("Order Placed Successfully")
        }).catch(function(error){
            console.log(error)
        })

    }
}