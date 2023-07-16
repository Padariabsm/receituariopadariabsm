var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDdKuFRrZdZfmYyFHefYpsqeNleEPMSSFA",
      authDomain: "padariareceituario.firebaseapp.com",
      projectId: "padariareceituario",
      storageBucket: "padariareceituario.appspot.com",
      messagingSenderId: "159527859464",
      appId: "1:159527859464:web:8888b169348e12fe1868bd"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


