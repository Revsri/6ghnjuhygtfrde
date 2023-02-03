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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



