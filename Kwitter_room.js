  const firebaseConfig = {
    apiKey: "AIzaSyCc6P2-SlbGew4zpShqvcLRhCmbBZbXJ8U",
    authDomain: "kwitter2-ec8a7.firebaseapp.com",
    projectId: "kwitter2-ec8a7",
    storageBucket: "kwitter2-ec8a7.appspot.com",
    messagingSenderId: "153670704802",
    appId: "1:153670704802:web:7313f230aa0c64f64281fb",
    measurementId: "G-G63Q8QK9QS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = user_name;

