import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwMskVtwxL6DF5NmRNONY19XPD85DbN0A",
  authDomain: "nutreetive.firebaseapp.com",
  projectId: "nutreetive",
  storageBucket: "nutreetive.firebasestorage.app",
  messagingSenderId: "135206215198",
  appId: "1:135206215198:web:21364c09212049ac5d180f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seleccionamos el botón y el formulario
const loginButton = document.getElementById('login');
const form = document.querySelector('form');

// Evento para el login
loginButton.addEventListener('click', (e) => {
    e.preventDefault();  // Prevenir el comportamiento predeterminado del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Intentamos iniciar sesión con el correo y la contraseña
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Usuario logeado correctamente');
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Manejo de errores comunes de Firebase
            if (errorCode === 'auth/invalid-email') {
                alert('El correo no es válido.');
            } else if (errorCode === 'auth/user-not-found') {
                alert('Usuario no encontrado.');
            } else if (errorCode === 'auth/wrong-password') {
                alert('Contraseña incorrecta.');
            } else {
                alert('Error: ' + errorMessage);
            }
        });
});