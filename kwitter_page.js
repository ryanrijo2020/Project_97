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
roomname=localStorage.getItem("roomname");
function send() {
      message=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("messageoutput").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;  

console.log(firebase_message_id);
console.log(message_data);
names=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>" + names +"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>" + message + "</h4>";
like_tag="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update_like(this.id)'>";
spanlike="<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row=name_tag + message_tag + like_tag + spanlike;
document.getElementById("messageoutput").innerHTML +=row;

   } });  }); }
getData();
function update_like(msg_id) {
   console.log("button_id" + msg_id);
   buttonid=msg_id;
   likes=document.getElementById(buttonid).value;
   updatelike=Number(likes) + 1;
   console.log(updatelike);
   firebase.database().ref(roomname).child(buttonid).update({
         like:updatelike
   });
}
function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("roomname");
   window.location="index.html";
 }
