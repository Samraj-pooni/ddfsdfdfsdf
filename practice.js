
const firebaseConfig = {
    apiKey: "AIzaSyBl7CBFKZjCcDjKVkpCDowLYxjCixjTSJU",
    authDomain: "p1coding.firebaseapp.com",
    databaseURL: "https://p1coding-default-rtdb.firebaseio.com",
    projectId: "p1coding",
    storageBucket: "p1coding.appspot.com",
    messagingSenderId: "1029255651772",
    appId: "1:1029255651772:web:da54ba6c6d40ac04bacbb9"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  function adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child("user_name").update({purpuse:"addinguser"});
  }