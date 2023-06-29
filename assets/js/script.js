// Global variables
var count = 20;
const uppercase = [];
const lowercase = [];
const numbers = [];
const specialChars = [];

// Get reference to the element with id 'generate'
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let options = [];
  if (confirm("Should the password include uppercase letters?")) {
    options.concat(uppercase);
  }
  if (confirm("Should the password include lowercase letters?")) {
    options.concat(lowercase);
  }
  if (confirm("Should the password include numbers?")) {
    options.concat(numbers);
  }
  if (confirm("Should the password include special characters?")) {
    options.concat(specialChars);
  }

  let count = parseInt(prompt("Enter the length of the password"));
  while (count < 8 || count > 128) {
    count = prompt(
      "That number is not between 8 and 128. Please enter a valid password length."
    );
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
