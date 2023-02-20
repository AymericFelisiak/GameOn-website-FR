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
const closeBtn = document.querySelector(".close");
const modalThanksBtn = document.querySelector('#modal-thanks-close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
modalThanksBtn.addEventListener("click", closeThanksModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
  modalbg.querySelector(".content").style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// reloads the page when closing modal thanks window
function closeThanksModal() {
  window.location.href = 'index.html';
}

// Checks if form is valid
// If all tests are passed, change modal style to thanks modal
// Returns false anyway to prevent page reload
function validate() {

  let firstName = document.querySelector('#first');
  let lastName = document.querySelector('#last');
  let email = document.querySelector('#email');
  let birthdate = document.querySelector('#birthdate');
  let quantity = document.querySelector('#quantity');
  let location = document.querySelectorAll('input[name="location"]');
  let contract = document.querySelector('#checkbox1');

  let valid = true;

  if(firstName.value < 2) {
    invalidInput(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    valid = false;
  }
  else validInput(firstName);

  if(lastName.value < 2) {
    invalidInput(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    valid = false;
  } 
  else validInput(lastName);

  if(!isEmailValid(email.value)) {
    invalidInput(email, "Veuillez entrer une adresse mail valide.");
    valid = false;
  }
  else validInput(email);

  if(birthdate.value == '') {
    invalidInput(birthdate, "Vous devez entrer votre date de naissance.");
    valid = false;
  }
  else validInput(birthdate);

  if(quantity.value == '') {
    invalidInput(quantity, "Ce champ ne doit pas être vide.");
    valid = false;
  }
  else validInput(quantity);

  if(!isLocationValid(location)) {
    invalidInput(location[0], "Vous devez choisir une option.");
    valid = false;
  } 
  else validInput(location[0]);

  if(!contract.checked) {
    invalidInput(contract, "Vous devez vérifier que vous acceptez les termes et conditions.");
    valid = false;
  }
  else validInput(contract);

  if(valid) {
    modalbg.querySelector('#form').style.display = "none";
    modalbg.querySelector('.modal-thanks').style.display = "flex";
    closeBtn.addEventListener("click", closeThanksModal);
  }

  return false;
}

// Adds error attributes to html when form input is incorrect
function invalidInput(node, id) {
  formData.forEach(elm => {
    if(elm.contains(node)) {
      elm.setAttribute("data-error-visible", "true");
      elm.setAttribute("data-error", id);
    }
  });
}

// Removes error attributes from html when form input is correct
function validInput(node) {
  formData.forEach(elm => {
    if(elm.contains(node)) {
      elm.removeAttribute("data-error-visible", "true");
      elm.removeAttribute("data-error");
    }
  });
}

// Return true if one element from checklist is checked
function isLocationValid(location) {

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