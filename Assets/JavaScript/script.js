// Assignment Code
var generateBtn = document.querySelector("#generate");
var errorMessage = document.querySelector("#error");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// These are each character set the user can choose to include
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword() {
  // These variables will hold the character sets the user selects, the password, and the password length
  var selectedChars = [];
  var password = "";
  var passwordLength = 8;

  var lengthInput = prompt("Please enter the length of your password. (Default: 8)", "Enter a number");

  // This checks if the length input is valid and reacts accordingly
  var lengthGiven = false;
  while (!lengthGiven) {
    if (isNaN(lengthInput)) {
      alert("Please input a number.");
      lengthInput = prompt("Please enter the length of your password. (Default: 8)", "Enter a number");
    } else if (lengthInput >= 8 && lengthInput <= 128) {
      passwordLength = lengthInput;
      lengthGiven = true;
      console.log("Password length: " + passwordLength);
    } else {
      alert("Please enter a number between 8 and 128.");
      lengthInput = prompt("Please enter the length of your password. (Default: 8)", "Enter a number");
    }
  }

  // These prompt the user to select the character sets they do/don't want to use
  // Pushing the corresponding character set to the selectedChars array
  if (confirm("Press \"OK\" to confirm lower case letters")) {
    selectedChars.push(lowerCases);
  }
  if (confirm("Press \"OK\" to confirm upper case letters")) {
    selectedChars.push(upperCases);
  }
  if (confirm("Press \"OK\" to confirm numbers")) {
    selectedChars.push(numbers);
  }
  if (confirm("Press \"OK\" to confirm special characters")) {
    selectedChars.push(specials);
  }
  console.log(selectedChars);

  // This checks to make sure at least 1 character set was selected
  if (selectedChars.length === 0) {
    alert("You must select at least 1 character set. Please press the \"Generate Password\" button again.");
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

  // This pushes a random character from a random set onto the password string until the password is at the appropriate length
  for(let i = password.length; i < passwordLength; i++) {
    randomArr = selectedChars[Math.floor(Math.random() * selectedChars.length)];
    randomChar = randomArr[Math.floor(Math.random() * randomArr.length)];
    password += randomChar;
  }

  return password;
}