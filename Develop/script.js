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

// 1. Define arrays of lower case, upper case, numbers, and specials ✅
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword() {
  // 1. Make an empty array ✅
  // 2. Make an empty string ✅
  // 3. Make a variable for the password length ✅
  // 4. Get user inputs through prompts and confirms ✅
  // 5. Check to make sure prompt input is valid ✅
  // 6. Push the constant arrays into the empty array ✅
  // 7. Repeat through each chosen array once, push a random character to the string ✅
  // 8. Run a for loop, randomly selecting an approved array and a random character in that array ✅
  // 9. Push each of those characters to the password string ✅
  // 10. Return the password string when the for loops are done ✅

  // These variables will hold the character sets the user selects, and the password string respectively
  var selectedChars = [];
  var password = "";
  var passwordLength = 8;
  var lengthInput = prompt("Please enter the length of your password. (Default: 8)", "Enter a number");

  if (isNaN(lengthInput)) {
    console.log("Input is not a number")
    alert("Please input a number.");
  } else if (lengthInput >= 8 && lengthInput <= 128) {
    passwordLength = lengthInput;
    console.log("Password length: " + passwordLength);
  } else {
    console.log("Input is out of acceptable range.");
    alert("Please enter a number between 8 and 128.");
  }

  if (confirm("Press \"OK\" to confirm lower case letters")) {
    selectedChars.push(lowerCases);
  } else {
    console.log("Lower case letters declined.");
  }

  if (confirm("Press \"OK\" to confirm upper case letters")) {
    selectedChars.push(upperCases);
  } else {
    console.log("Upper case letters declined.");
  }

  if (confirm("Press \"OK\" to confirm numbers")) {
    selectedChars.push(numbers);
  } else {
    console.log("Numbers declined.");
  }

  if (confirm("Press \"OK\" to confirm special characters")) {
    selectedChars.push(specials);
  } else {
    console.log("Special characters declined.");
  }

  if (selectedChars.length === 0) {
    alert("You must select at least 1 character set.");
  } else {
    console.log("Selected characters:")
    console.log(selectedChars);
  }

  // This runs through the selected character types, putting 1 of each at the start
  for(let i = 0; i < selectedChars.length; i++) {
    randomNum = Math.floor(Math.random() * selectedChars[i].length);
    currentArray = selectedChars[i];
    password += currentArray[randomNum];
  }

  // This places random characters from a random selected character type until the password is as the appropriate length
  for(let i = password.length; i < passwordLength; i++) {
    randomArr = selectedChars[Math.floor(Math.random() * selectedChars.length)];
    randomChar = randomArr[Math.floor(Math.random() * randomArr.length)];
    password += randomChar;
  }

  return password;
}