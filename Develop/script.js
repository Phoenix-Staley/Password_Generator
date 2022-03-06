// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. Define arrays of lower case, upper case, numbers, and specials

function generatePassword() {
  // 1. Get user inputs through prompts and confirms
  // 2. Check to make sure prompt input is valid
  // 3. Make an empty array
  // 4. Push the constant arrays into the empty array
  // 5. Make an empty string
  // 6. Repeat through each chosen array once, push a random character to the string
  // 7. Run a for loop, randomly selecting an approved array and a random character in that array
  // 8. Push each of those characters to the password string
  // 9. Return the password string when the for loops are done

  return passwordVar;
}