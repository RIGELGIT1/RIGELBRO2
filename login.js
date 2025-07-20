<!-- Replace form POST with this -->
<form id="loginForm">
  <input type="text" id="username" placeholder="Username" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>

<script>
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Do login check here if needed
    window.location.href = "home.html"; // Go to home page
  });
</script>
