const firebaseConfig = {
      apiKey: "AIzaSyC0r89r2cRJJ3pIuiXg35KMLjY45m0q1Kw",
      authDomain: "drlupo-64ae4.firebaseapp.com",
      databaseURL: "https://drlupo-64ae4-default-rtdb.firebaseio.com",
      projectId: "drlupo-64ae4",
      storageBucket: "drlupo-64ae4.appspot.com",
      messagingSenderId: "856323432005",
      appId: "1:856323432005:web:d71ebba6f00a6d543d0d2c"
    };
    
    firebase.initializeApp(firebaseConfig);

    Evan = localStorage.getItem("gameid");
      document.getElementById("gameid").innerHTML = "Welcome" + Evan + "!";

    function addroom (){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class= 'room_name' id =" + Room_names+"onclick='redirect_Roomname(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirect_Roomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("gameid");
      window.location = "index.html";
}