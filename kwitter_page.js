// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAtcuBv92OyXvBMd060uVXGPjn16BNYKIg",
      authDomain: "kwitter-project-54736.firebaseapp.com",
      databaseURL: "https://kwitter-project-54736.firebaseio.com",
      projectId: "kwitter-project-54736",
      storageBucket: "kwitter-project-54736.appspot.com",
      messagingSenderId: "313801583576",
      appId: "1:313801583576:web:93c486486a38bf10b9e0ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("Room name");
console.log(user_name);
console.log(room_name);
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room name");
      window.location = "kwitter.html";
 }
