function addUserName() {
  const userName = localStorage.fname;
  if (userName !== undefined) {
    document.querySelector(
      ".welcome-message"
    ).innerHTML = `Welcome back, ${userName}!`;
  }
}

function onLogin() {
  localStorage.clear();
  store();
}

function store() {
  let firstName = document.getElementById("first-name");
  localStorage.setItem("fname", firstName.value);
  let lastName = document.getElementById("last-name");
  localStorage.setItem("last-name", lastName.value);
}
