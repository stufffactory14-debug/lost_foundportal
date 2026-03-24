// check login
const user = localStorage.getItem("user");

if(!user){
    window.location.href = "/pages/login.html";
}

// logout function
function logout(){
    localStorage.removeItem("user");
    window.location.href = "/pages/login.html";
}