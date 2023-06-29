// Global variables
const letters = "abcdefghijklmnopqrstuvwxyz";
// Dictionary contains all character types
const dictionary = [
  {
    name: "uppercase letters",
    chars: letters.toUpperCase().split(""),
  },
  {
    name: "lowercase letters",
    chars: letters.split(""),
  },
  {
    name: "numbers",
    chars: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    name: "special characters",
    chars: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(""),
  },
];

// Get reference to the element with id 'generate'
var generateBtn = document.querySelector("#generate");

/**
 * Prompts the user for password options, generates password from selected options
 * @returns {string} Generated password
 */
function generatePassword() {
  /**
   * Prompts the user for each character type, adds selected characters to flat array
   * @returns {Array<string>} Array with all selected character types
   */
  function getCharacterTypes() {
    var types = [];
    // Loop over dictionary and ask if every character set should be included
    dictionary.forEach(({ name, chars }) => {
      if (confirm(`Should the password include ${name}?`)) {
        types = types.concat(chars);
      }
    });
    return types;
  }

  // Ask for options, if no options are given ask again
  var options = getCharacterTypes();
  while (options.length <= 0) {
    alert("Please select at least one character type.");
    options = getCharacterTypes();
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
    // Add a new, random character to the password
    password = password.concat(
      options[Math.floor(Math.random() * options.length)]
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Set the text of the element with id 'password'
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
