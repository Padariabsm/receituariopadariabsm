
    // Configuração do Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyDdKuFRrZdZfmYyFHefYpsqeNleEPMSSFA",
      authDomain: "padariareceituario.firebaseapp.com",
      projectId: "padariareceituario",
      storageBucket: "padariareceituario.appspot.com",
      messagingSenderId: "159527859464",
      appId: "1:159527859464:web:8888b169348e12fe1868bd"
    };

    // Inicializar o Firebase com a configuração
    firebase.initializeApp(firebaseConfig);

    // Referência ao formulário de login
    var loginForm = document.getElementById("login-form");

    // Lidar com o evento de submit do formulário
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      // Fazer o login com Firebase
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
          // Sucesso - redirecionar para a página index.html após o login bem-sucedido
          window.location.href = "index.html";
        })
        .catch(function(error) {
          // Mostrar mensagem de erro
          document.getElementById("error-message").innerText = "Credenciais inválidas. Por favor, verifique o e-mail e a senha.";
        });
    });


