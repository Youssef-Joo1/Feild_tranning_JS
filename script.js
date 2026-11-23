let filterButtons = document.querySelectorAll(".filter-buttons button");
let menuItems = document.querySelectorAll(".menu-item");


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
