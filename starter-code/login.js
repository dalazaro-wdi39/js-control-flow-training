console.log("login.js loaded");

var userLogin = { userName: "braunstrowman", password: "rawwwwwww" }

//prompt the user for password
var passwordInput = prompt(`Please enter password for user ${userLogin.userName}.`)

//user is not loggedIn at initial screen load
var loggedIn = false;

//if the password input matches the real password, then user gets a success alert and the user gets logged in
while (!loggedIn) {
  if ( passwordInput === userLogin.password ) {
    user.alert("Success!");
    loggedIn = true;
  } else {
    passwordInput = prompt("Your passwords did not match. Please try again.");
  }
}
//otherwise, the user must try again
