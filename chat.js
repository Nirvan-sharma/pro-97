
var firebaseConfig = {
  apiKey: "AIzaSyDCR5-vNuzsNpTnO8sofL-63iY4M3W-hSQ",
  authDomain: "chat-app-733dc.firebaseapp.com",
  databaseURL: "https://chat-app-733dc-default-rtdb.firebaseio.com",
  projectId: "chat-app-733dc",
  storageBucket: "chat-app-733dc.appspot.com",
  messagingSenderId: "281455331778",
  appId: "1:281455331778:web:6dec33da11a048a2706e5b",
  measurementId: "G-2XEB3VEHNG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });

  localStorage.setItem("room_name",room_name);
  window.location="chat_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  console.log("Room Name - "+Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML+=row;

  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}