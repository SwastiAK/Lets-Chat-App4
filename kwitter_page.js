const firebaseConfig = {
    apiKey: "AIzaSyBBM-stN3UuTFioZHn8NlxsNk1j0L_Fb0I",
    authDomain: "kwitter-project-new.firebaseapp.com",
    databaseURL: "https://kwitter-project-new-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-new",
    storageBucket: "kwitter-project-new.appspot.com",
    messagingSenderId: "722148362178",
    appId: "1:722148362178:web:32dbed1a361815dda0385b"
  };
  
  // Initialize Firebase
  firebasre.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();