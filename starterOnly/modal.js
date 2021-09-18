function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailNameInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationOneInput = document.getElementById("location1");
const locationTwoInput = document.getElementById("location2");
const locationThreeInput = document.getElementById("location3");
const locationFourInput = document.getElementById("location4");
const locationFiveInput = document.getElementById("location5");
const locationSixInput = document.getElementById("location6");
const checkboxOneInput = document.getElementById("checkbox1");
const checkboxTwoInput = document.getElementById("checkbox2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Hide the background and the form on click on the X
function closeForm() {
  modalbg.style.display = "none"
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailNameInput.value = "";
  quantityInput.value= "";
  birthDateInput.value = "jj/mm/aaaa"
  checkboxOneInput.checked = true;
  checkboxTwoInput.checked = false;
  locationOneInput.checked = false;
  locationTwoInput.checked = false;
  locationThreeInput.checked = false;
  locationFourInput.checked = false;
  locationFiveInput.checked = false;
  locationSixInput.checked = false;

}


