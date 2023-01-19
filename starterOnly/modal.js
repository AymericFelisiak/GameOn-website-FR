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
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Returns true if each input from the user in the form is valid
function validate() {
  let firstName = formData[0].children['first'].value;
  let lastName = formData[1].children['last'].value;
  let email = formData[2].children['email'].value;
  let birthdate = formData[3].children['birthdate'].value;
  let quantity = formData[4].children['quantity'].value;

  let valid = true;

  if(firstName < 2) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
    valid = false;
  }
  else {
    formData[0].setAttribute("data-error-visible", "false");
    formData[0].removeAttribute("data-error");
  }

  if(lastName < 2) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
    valid = false;
  } 
  else {
    formData[1].setAttribute("data-error-visible", "false");
    formData[1].removeAttribute("data-error");
  }

  if(!isEmailValid(email)) {
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Email incorrect.");
    valid = false;
  }
  else {
    formData[2].setAttribute("data-error-visible", "false");
    formData[2].removeAttribute("data-error");
  }

  if(birthdate == '') {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    valid = false;
  }
  else {
    formData[3].setAttribute("data-error-visible", "false");
    formData[3].removeAttribute("data-error");
  }

  if(quantity == '') {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Ce champs ne doit pas être vide.");
    valid = false;
  }
  else {
    formData[4].setAttribute("data-error-visible", "false");
    formData[4].removeAttribute("data-error");
  }

  if(!isLocationValid()) {
    valid = false;
  }

  return valid;
}

// Return true if one element from checklist is checked
function isLocationValid() {

  let location = formData[5].querySelectorAll('input');

  let locationFlag = false;

  location.forEach(elmt => {
    if(elmt.checked) {
      locationFlag = true;
    }
  });

  return locationFlag;
}

// Returns true if email is valid
function isEmailValid(email) {
  let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return regex.test(email);
}