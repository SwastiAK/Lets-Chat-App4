// Your web app's Firebase configuration
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
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}