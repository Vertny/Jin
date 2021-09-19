function adduser()
{
gameid = document.getElementById("gameid").value;
localStorage.setItem("gameid", gameid);
window.location = "kwitter_room.html";
}