let togglebtn = document.getElementById("togglebtn");
let navLinks = document.getElementById("navLinks");
let btn = document.getElementById("btn");

togglebtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("active");
});
btn.addEventListener("click", function() {
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