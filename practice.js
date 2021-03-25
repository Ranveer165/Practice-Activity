
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDMHXT95Cc7MWB8wcAY1SurBBurBhcH_vI",
    authDomain: "kwitter-81308.firebaseapp.com",
    databaseURL: "https://kwitter-81308-default-rtdb.firebaseio.com",
    projectId: "kwitter-81308",
    storageBucket: "kwitter-81308.appspot.com",
    messagingSenderId: "97585703280",
    appId: "1:97585703280:web:6f5e35752d66c4f91247b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding username"});
      
  }