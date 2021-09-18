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
const modalValidation = document.querySelector(".bgroundValidation");
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
//Errors
const firstNameError = document.querySelector(".firstnameError");
const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const birthdateError = document.querySelector(".birthdateError");
const cityError = document.querySelector(".cityError");
const conditionError = document.querySelector(".conditionError");

const form = document.getElementById("form");
form.addEventListener('submit', handleForm);


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Hide and Erase Data of the form
function closeForm() {
  modalbg.style.display = "none"
  eraseFormData();
}

// Hide the form
function hideForm() {
  modalbg.style.display = "none"
}


// Erase the datas
function eraseFormData() {
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

// Hide the thanks modal then Erase the forms datas
function closeFormValidationModal() {
  modalValidation.style.display = "none"
  eraseFormData();
}

// Reset errors by putting normal border and none display for error labels
function resetErrors() {
  firstNameError.style.display = "none";
  firstNameInput.style.borderColor = "transparent";
  nameError.style.display = "none";
  lastNameInput.style.borderColor = "transparent";
  emailError.style.display = "none";
  emailNameInput.style.borderColor = "transparent";
  birthdateError.style.display = "none";
  birthDateInput.style.borderColor = "transparent";
  cityError.style.display = "none";
  conditionError.style.display = "none";
}

function handleForm(event) { 

  resetErrors();

  if (firstNameInput.value.length < 2) {
    firstNameError.style.display = "block";
    firstNameInput.style.borderColor = "red";
  }
  else if (lastNameInput.value.length < 2) {
    nameError.style.display = "block";
    lastNameInput.style.borderColor = "red";
  }
  else if (emailNameInput.value.length < 2) {
    emailError.style.display = "block";
    emailNameInput.style.borderColor = "red";
  }
  else if (birthDateInput.value == '') {
    birthdateError.style.display = "block";
    birthDateInput.style.borderColor = "red";
  }
  else if (!checkboxOneInput.checked) {
    conditionError.style.display = "block";
  }
  else if (quantityInput.value != '') {
    if (!locationOneInput.checked && !locationTwoInput.checked && !locationThreeInput.checked && !locationFourInput.checked && !locationFiveInput.checked && !locationSixInput.checked) {
      cityError.style.display = "block";
    }
    else {
      hideForm(); 
      modalValidation.style.display = "block"
    }
  }
  else {
    hideForm(); 
    modalValidation.style.display = "block"
   }
  
  event.preventDefault(); 
} 
