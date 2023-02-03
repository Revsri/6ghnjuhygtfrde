const firebaseConfig = {
    apiKey: "AIzaSyD621D7FL73lLGMBR67sN3cL_e8uxdvRyg",
    authDomain: "lets-chat-web-app-f5495.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f5495-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f5495",
    storageBucket: "lets-chat-web-app-f5495.appspot.com",
    messagingSenderId: "897401265083",
    appId: "1:897401265083:web:e29295b70d94a45716c29e"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStroage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}    

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -" +  Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      lacalStroage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
}