function addUserName() {
  const userName = localStorage.fname;
  if (userName !== undefined) {
    document.getElementById(
      "loginNameMessage"
    ).innerHTML = `Welcome back, ${userName}!`;
  }
}

function onLogin() {
  localStorage.clear();
  store();
  // console.log(localStorage);
}

function store() {
  let firstName = document.getElementById("fname");
  localStorage.setItem("fname", firstName.value);
  let lastName = document.getElementById("lname");
  localStorage.setItem("lname", lastName.value);
}
