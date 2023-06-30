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

/**
 * Prompts the user for password options, generates password from selected options
 * @returns {string} Generated password
 */
function generatePassword() {
  /**
   * Gets the length of the password from the user
   * @param {string} text Line of text to precede the default prompt
   * @returns {null | string | number} Null for exit, string for invalid input, and number for valid input
   */
  function getCount(text = "") {
    let len = prompt(
      text + "Enter a password length between 8 and 128 characters"
    );
    if (len === null) return null;
    else if (Number.isNaN(len) || len === "") return len;
    else return parseInt(len);
  }

  /**
   * Prompts the user for each character type, adds selected characters to flat array
   * @returns {Array<string>} Array with all selected character types
   */
  function getCharacterTypes() {
    let types = [];
    // Loop over dictionary and ask if every character set should be included
    dictionary.forEach(({ name, chars }) => {
      if (confirm(`Should the password include ${name}?`)) {
        types = types.concat(chars);
      }
    });
    return types;
  }

  // Get count, if count is invalid ask again
  count = getCount();
  // Checks the validity of the input and reprompts with a relevent message
  while (!(count > 8 && count < 128)) {
    if (count == null) return null;
    // Empty input
    if (count === "") count = getCount("The input is empty.\n");
    // Any other non-number string input
    else if (Number.isNaN(count)) count = getCount("That is not a number.\n");
    // Number outside bounds
    else count = getCount("That number is not between 8 and 128.\n");
    // If user selects cancel exit password generation
  }

  // Ask for options
  let options = getCharacterTypes();
  // If no options are selected show a message and ask again
  while (options.length <= 0) {
    alert("Please select at least one character type.");
    options = getCharacterTypes();
  }

  // Generate password randomly
  let password = "";
  for (let i = 0; i < count; i++) {
    // Add a new, random character to the password
    password = password.concat(
      options[Math.floor(Math.random() * options.length)]
    );
  }

  return password;
}

/**
 * Write password to the #password input
 */
function writePassword() {
  let password = generatePassword();
  // Set the text of the element with id 'password'
  var passwordText = document.querySelector("#password");
  if (password !== null) {
    passwordText.value = password;
  }
}

// Get reference to the element with id 'generate'
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
