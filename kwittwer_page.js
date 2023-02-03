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

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          massage:msg,
          like:0
    });

    document.getElementById("msg").value = "";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + name + "</h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "<h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value"+like+"onclick='updateLike(this.id)'>likes :"+ like +"</button>"

         row = name_with_tag + message_with_tag +like_button;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - "+ message_id);
  button_id = message_id;
  like = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  window.location = "index.html"
}