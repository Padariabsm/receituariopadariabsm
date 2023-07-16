// Configuração do Firebase
const firebaseConfig = {
 apiKey: "AIzaSyDdKuFRrZdZfmYyFHefYpsqeNleEPMSSFA",
      authDomain: "padariareceituario.firebaseapp.com",
      projectId: "padariareceituario",
      storageBucket: "padariareceituario.appspot.com",
      messagingSenderId: "159527859464",
      appId: "1:159527859464:web:8888b169348e12fe1868bd"
};

firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById('loginForm');
const btnRegister = document.getElementById('btnRegister');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// Função para realizar o login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      errorMessage.style.display = 'none';
      successMessage.style.display = 'block';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000); // Redireciona após 2 segundos
    })
    .catch((error) => {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
      console.error(error);
    });
});

// Redirecionar para a tela de registro
btnRegister.addEventListener('click', () => {
  window.location.href = 'registro.html';
});
