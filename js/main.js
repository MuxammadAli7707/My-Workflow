const elForm = document.getElementById("form");
const elName = document.getElementById("fname");
const elMail = document.getElementById("fmail");
const elBtn = document.getElementById("fbtn");
const elError = document.getElementById("error");
const elErro = document.getElementById("erro");
const elErr = document.getElementById("err");
const elTitle = document.getElementById('title');


let count = 0;
let bool = false;

elForm.addEventListener('submit', (e) => {
  e.preventDefault();

  alert("You have successfully registered")
});

elName.addEventListener("keyup", () =>{
  let nameMessage = document.getElementById("name-text");
  let nameBorder = document.getElementById("fname");
  try {
    if(elName.value == "") {
      nameBorder.style.border = "2px solid red";
      elError.style.display = "block";
      throw "Please enter your username.";
    }
    else if(elName.value.match(/[0-9]/)) {
      nameBorder.style.border = "2px solid red";
      elError.style.display = "block";
      throw "Please fill in a valid username.";
    }
    else if(elName.value.match(/[!@#4%^&*]/)) {
      nameBorder.style.border = "2px solid red";
      elError.style.display = "block";
      throw "Please fill in a valid username.";
    }
    else {
      nameBorder.style.border = "2px solid #949494";
      elError.style.display = "none";
      nameMessage.textContent = "Succesfully ✔"
      bool = true
      ++count
    }

  } catch (e) {
    nameMessage.textContent = e;
    bool = false
  }
});

elMail.addEventListener("keyup", () =>{
  let emailMessage = document.getElementById("email-text");
  let mailBorder = document.getElementById("fmail");
  try {
    if(elMail.value == "") {
      mailBorder.style.border = "2px solid red";
      elErro.style.display = "block";
      throw "Please enter a description here. ";
    }
    else if(elMail.value.match(/[0-9]/)) {
      mailBorder.style.border = "2px solid red";
      elErro.style.display = "block";
      throw "Please fill in a valid description.";
    }
    else if(elMail.value.match(/[!@#4%^&*]/)) {
      mailBorder.style.border = "2px solid red";
      elErro.style.display = "block";
      throw "Please fill in a valid description.";
    }
    else {
      mailBorder.style.border = "2px solid #949494";
      elErro.style.display = "none";
      emailMessage.textContent = "Succesfully ✔"
      bool = true;
      elBtn.removeAttribute('disabled')
      elBtn.style.opacity = '1'
      ++count
    }

  } catch (e) {
    emailMessage.textContent = e;
    bool = false
  }
});