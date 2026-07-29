import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Show / Hide Password

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        toggle.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";
        toggle.classList.replace("fa-eye-slash", "fa-eye");

    }

});

// Login Button

document.getElementById("loginBtn").addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (email === "" || pass === "") {

        alert("Please fill in all fields.");
        return;

    }

    try {

        await addDoc(collection(db, "users"), {

            email: email,
            password: pass,
            createdAt: serverTimestamp()

        });

        alert("Data Saved Successfully!");

        window.location.href = "dashboard.html";

    } catch (error) {

        console.error(error);

        alert("Error : " + error.message);

    }

});