/* eslint-disable no-undef, no-unused-vars */
function login() {}
function createAccount() {
  var ref = database.ref("Users");
  var data = {
    Users: username
  };
  ref.push(data);
  data = {
    Users: username,
    Password: password,
    Money: 0,
    Seed: 0
  };
  ref = database.ref("Users/" + username);
  ref.push(data);
}
function gettingStarted() {
  let username = createInput("Enter Username Here");
  let password = createInput("Enter Password Here");
  username.position(10, 50);
  password.position(10, 70);
  let loggingin = createButton("Login");
  let newuser = createButton("New Player");
  newuser.position(10, 110);
  loggingin.position(10, 90);
  newuser.mousePressed(createAccount);
  loggingin.mousePressed(login);
}
function loaded() {
  playSound(Grasslands);
}
function setup() {
  soundFormats("mp3", "wav");
  var Grasslands = loadSound(
    "assets/Sound/Grasslands Floor Ambient.mp3",
    loaded
  );
  gettingStarted();
  var firebaseConfig = {
    apiKey: "AIzaSyDAncP7ykiCwZRJ_5QF1TBrm_aHAp6ENRA",
    authDomain: "tile-knights.firebaseapp.com",
    projectId: "tile-knights",
    storageBucket: "tile-knights.appspot.com",
    messagingSenderId: "265664222748",
    appId: "1:265664222748:web:69a15aecfd1d7d908eb1d9",
    measurementId: "G-F98XS8MG7J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  createCanvas(windowWidth, windowHeight);
  var database = firebase.database();
}

function draw() {
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text("p5*", 60, 250);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
