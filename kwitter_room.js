function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
  window.location="index.html";
} 
var firebaseConfig = {
  apiKey: "AIzaSyBHbl9sesVnHtgrGupKj98aFIl9F6NkG78",
  authDomain: "project-97-690a5.firebaseapp.com",
  databaseURL: "https://project-97-690a5-default-rtdb.firebaseio.com",
  projectId: "project-97-690a5",
  storageBucket: "project-97-690a5.appspot.com",
  messagingSenderId: "281280975631",
  appId: "1:281280975631:web:489f882bc3442dbf95247a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + username + "!";

function Addroom() {
  roomname=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
purpose:"roomname"

});
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
  childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(roomname);
      row="<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      });
    });
  } 
getData();
function redirect(name) {
  console.log(name);
  localStorage.setItem("roomname" , name);
  window.location="kwitter_page.html";
}


getData();
function redirect(name) {
  console.log(name);
  localStorage.setItem("roomname" , name);
  window.location="kwitter_page.html";
}
