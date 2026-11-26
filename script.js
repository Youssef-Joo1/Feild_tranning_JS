let togglebtn = document.getElementById("togglebtn");
let navLinks = document.getElementById("navLinks");
let btnex = document.getElementById("btnex");

togglebtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("active");
});
btnex.addEventListener("click", function() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
});


let links = navLinks.querySelectorAll("a");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});
