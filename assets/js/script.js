// Global variables
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

// Get reference to the element with id 'generate'
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var options = [];
  function getOptions() {
    if (confirm("Should the password include uppercase letters?")) {
      options = options.concat(letters);
    }
    if (confirm("Should the password include lowercase letters?")) {
      options = options.concat(letters.map((letter) => letter.toUpperCase()));
    }
    if (confirm("Should the password include numbers?")) {
      options = options.concat(numbers);
    }
    if (confirm("Should the password include special characters?")) {
      options = options.concat(specialChars);
    }
    return options;
  }

  // Ask for options, if no options are given ask again
  options = getOptions();
  while (options.length <= 0) {
    alert("Please select at least one character type.");
    options = getOptions();
  }

  // Get count, if count is invalid ask again
  let count = parseInt(prompt("Enter the length of the password"));
  while (count < 8 || count > 128) {
    count = parseInt(
      prompt(
        "That number is not between 8 and 128. Please enter a valid password length."
      )
    );
  }

  let password = "";
  for (var i = 0; i < count; i++) {
    password.concat(options[Math.floor(Math.random() * count)]);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
