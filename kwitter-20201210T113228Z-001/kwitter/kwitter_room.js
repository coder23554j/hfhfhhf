
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name +"!";

function addRoom()
{

room_name=document.getElementById("room_name").value;
firebase.databse().ref("/").child(room_name).update({

  purpose : "addign room name"    
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";


}

function redierectToRoomName(name)
{
console.log(name);
localStorage.SetItem("room_name", name);
window.locatian - "kwitter_page.html";

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location = "Kwitter.html";

}

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
     like:0
});

document.getElementById("msg").value = "";
}







