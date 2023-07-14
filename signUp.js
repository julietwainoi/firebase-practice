// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvIDACVHAEkPaX2IwFJrhtEImRz6hHEpw",
  authDomain: "fir-practice-43ca1.firebaseapp.com",
  projectId: "fir-practice-43ca1",
  storageBucket: "fir-practice-43ca1.appspot.com",
  messagingSenderId: "663661137687",
  appId: "1:663661137687:web:d6057726a815cc7b3ab152",
  measurementId: "G-6XW3F06RFJ",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const database = getDatabase(app);


//log in fields 
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

//create account fields
const signupEmailIn = document.getElementById("email-signup");
const confirmEmailsignUpIn = document.getElementById("Confirm-email");
const signupPasswordIn = document.getElementById("password-signup");
const confirmsignupPasswordIn = document.getElementById("Confirm-password");

const createAccountBtn = document.getElementById("createAccountBtn");

const main = document.getElementById("main");
const createAccount = document.getElementById("create-acc");

const returnButton = document.getElementById("return-Btn");
const signUpButton = document.getElementById("sign-up");

var email,
  password,
  signUpEmail,
  signUpPassword,
  confirmsignUpEmail,
  confirmsignupPassword;

createAccountBtn.addEventListener("click", function () {
  //console.log('hello');
  var isVerified = true;

  signUpEmail = signupEmailIn.value;
  confirmsignUpEmail = confirmEmailsignUpIn.value;
  if (signUpEmail != confirmsignUpEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signUpPassword = signupPasswordIn.value;
  confirmsignupPassword = confirmsignupPasswordIn.value;
  if (signUpPassword != confirmsignupPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signUpEmail == null ||
    confirmsignUpEmail == null ||
    signUpPassword == null ||
    confirmsignupPassword == null
  ) {
    window.alert("please fill out all required fields");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        //signed in 
        const user = userCredential.user;
        //...

        window.alert("success Account created.");
        window.location = "./dashboard.html";
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  //console.log{email}
  password = passwordInput.value;
  //console.log(password);


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //signed in 
      const user = userCredential.user;

      window.alert("Success! Welcome back!");
      window.location = "./createTask.html";

      // ...
    })

    .catch((error) => {
      //const errorCode;
      //const errorMessage; 
      window.alert("Error occurred. Try again.")
    });


});

signUpButton.addEventListener("click", function () {
  main.style.display = "none";
  createAccountBtn.style.display = "block";

});

returnButton.addEventListener("click", function () {
  main.style.display = "block";
  createAccountBtn.style.display = "none";
});

