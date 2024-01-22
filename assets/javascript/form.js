let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let address = document.getElementById("address");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");
let errorMsg = document.getElementById("error3");
let nameMsg = document.getElementById("error1");
let secondMsg = document.getElementById("error2");
let phoneMsg = document.getElementById("error4");

function validateForm() {
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !message.value ||
    !address.value ||
    !phoneNumber.value ||
    !password.value
  ) {
    alert("All fields are required!");
    return false;
  }

  let alertMessage = "Submitted Values:\n\n";
  alertMessage += "First Name: " + firstName + "\n";
  alertMessage += "Last Name: " + lastName + "\n";
  alertMessage += "Email: " + email + "\n";
  alertMessage += "Message: " + message + "\n";
  alertMessage += "Address: " + address + "\n";
  alertMessage += "Phone Number: " + phoneNumber + "\n";

  alert(alertMessage);

  document.getElementById("myForm").reset();

  return false;
}
email.onblur = function () {
  if (!email.value.includes("@")) {
    console.log("Inside function");
    email.classList.add("invalid");
    errorMsg.innerHTML = "Please enter a correct email.";
  } else {
    email.classList.remove("invalid");
    errorMsg.innerHTML = "";
    console.log("corrected");
  }
};

firstName.onblur = function () {
  var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!nameRegex.test(firstName)) {
    console.log("Inside function");
    firstName.classList.add("invalid");
    nameMsg.innerHTML = "Please enter a correct Name.";
  } else {
    firstName.classList.remove("invalid");
    nameMsg.innerHTML = "";
    console.log("corrected");
  }
};

lastName.onblur = function () {
  var nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(lastName)) {
    console.log("Inside function");
    lastName.classList.add("invalid");
    secondMsg.innerHTML = "Please enter a correct Last Name.";
  } else {
    lastName.classList.remove("invalid");
    secondMsg.innerHTML = "";
    console.log("corrected");
  }
};

phoneNumber.onblur = function () {
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    console.log("Inside function");
    phoneNumber.classList.add("invalid");
    phoneMsg.innerHTML = "Please enter a correct number.";
  } else {
    phoneNumber.classList.remove("invalid");
    phoneMsg.innerHTML = "";
    console.log("corrected");
  }
};
