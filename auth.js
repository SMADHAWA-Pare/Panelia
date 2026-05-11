function login(username) {
  localStorage.setItem("user", username);
}

function logout() {
  localStorage.removeItem("user");
}

function getUser() {
  return localStorage.getItem("user");
}
