const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "1234"){
        localStorage.setItem("user", username);

        // 🔥 redirect to dashboard
        window.location.href = "/pages/index.html";
    } else {
        alert("Invalid credentials");
    }
});