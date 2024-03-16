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
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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

var user = localStorage.getItem("userDetails");

user = JSON.parse(user);
console.log(user);

function imageUploader(file) {
  return new Promise(function (resolve, reject) {
    const storageRef = strRef(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error.message);
      },
      function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });
}

var imgUpload = document.getElementById("imgUpload");

window.addProduct = function () {
  imageUploader(imgUpload.files[0])
    .then(function (url) {
      var obj = {
        title: "Trousers",
        description: "Trousers Description",
        price: 1000,
        imgUrl: url,
      };

      obj.id = push(ref(db, "products")).key;

      var reference = ref(db, `products/${obj.id}`);

      set(reference, obj);
    })
    .catch(function (err) {
      console.log(err);
    });
};

// function AbdullahKiShadi(abdullahKaApnaGhar, abdullahKiSalary, abdullahKiGari) {
//   return new Promise(function (resolve, reject) {
//     var abdullahKaApnaGhar = abdullahKaApnaGhar;
//     var abdullahKiSalary = abdullahKiSalary;
//     var abdullahKiGari = abdullahKiGari;

//     // process ...

//     if (abdullahKaApnaGhar == true && abdullahKiSalary > 70000) {
//       resolve("Rishta Ho sakta hai Istikhare Pe");
//     } else {
//       reject("Better Luck Next Time");
//     }
//   });
// }
