let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("massege");
let btn = document.getElementById("addBtn");

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


//let nameInput = document.getElementById("name");
//let emailInput = document.("emailare
//let messageInput = document.getElementById("massege");
//let btn = document.getElementById("addBtn");

//btn.addEventListener("click", function() {

   // if (nameInput.value == "" || emailInput.value == "" || messageInput.value == "") {
      // alert("All fields are required");
  //  }
   // else if (!emailInput.value.includes("@")) {
      //  alert("name@example.com");
  //  }
   // else if (!emailInput.value.includes(".")) {
     //   alert("name@example.com");
   // }
   // else {
     //   alert("Form submitted successfully");
     //   nameInput.value = "";
    //    emailInput.value = "";
  //      messageInput.value = "";
  //  }

//});