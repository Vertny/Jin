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
    Jack = localStorage.getItem("room_name");
    Jill = localStorage.getItem("gameid");
function send () {
muk = document.getElementById("muk").value;
firebase.database().ref(Jack).push({
name : room_name,
message : muk,
like:0
});}
document.getElementById("muk").value = "";
    
function getData(){firebase.database().ref("/"+room_name).on('value',function(snapshot){ document.getElementById("output").innerHTML = "" ; snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey!= "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      }});});}
getData()
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("gameid");
      window.location = "index.html";
}
