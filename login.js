document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (username === savedUser.username && password === savedUser.password) {
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});
