import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwMskVtwxL6DF5NmRNONY19XPD85DbN0A",
  authDomain: "nutreetive.firebaseapp.com",
  projectId: "nutreetive",
  storageBucket: "nutreetive.firebasestorage.app",
  messagingSenderId: "135206215198",
  appId: "1:135206215198:web:21364c09212049ac5d180f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejo del evento de registro
const registroFormulario = document.getElementById('registro-formulario');
registroFormulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    console.log("Formulario enviado");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('Usuario creado:', cred);
            alert("Usuario creado con éxito"); 
        })
        .catch((error) => {
            console.error("Error al registrar:", error); 
            const errorCode = error.code;

            if (errorCode === 'auth/weak-password') {
                alert('La contraseña es muy débil.');
            } else if (errorCode === 'auth/email-already-in-use') {
                alert('El correo electrónico ya está en uso.');
            } else {
                alert(error.message);
            }
        });
});
