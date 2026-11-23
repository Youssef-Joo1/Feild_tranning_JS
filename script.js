let filterButtons = document.querySelectorAll(".filter-buttons button");
let menuItems = document.querySelectorAll(".menu-item");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("massege");
let btn = document.getElementById("addBtn");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {
         
        let filterValue = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        menuItems.forEach(function (item) {

            let itemCategory = item.dataset.category;

            if (filterValue === "all" || filterValue === itemCategory) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }
        });
    });
});


btn.addEventListener("click", function() {

    if (nameInput.value == "" || emailInput.value == "" || messageInput.value == "") {
        alert("All fields are required");
    } 
    else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        alert("name@example.com");
    } 
    else {
        alert("Form submitted successfully");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
});