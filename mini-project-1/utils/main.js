$(document).ready(function () {
  welcomeMessage();
  triggerLogoutButton();
});

function welcomeMessage() {
  if (localStorage.getItem("user") !== "") {
    $("#loginForm").remove();
    $("#welcome-message").html("Welcome " + localStorage.getItem("user"));
  }
}

function triggerLogoutButton() {
  if (localStorage.getItem("user") === "") {
    $("#logoutbutton").remove();
  }
}

function login() {
  name = document.getElementById("name").value;
  password = document.getElementById("password").value;

  localStorage.setItem("user", name);
}

function logout() {
  localStorage.setItem("user", "");
  window.location.reload();
}
