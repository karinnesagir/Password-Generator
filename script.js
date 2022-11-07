// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword (){

    // window.prompt returns a string value
    var userLengthInput = window.prompt("How many characters would you like your passowrd to have? You must have at least 8 characters and no more than 128 characters.");
    // parseInt () converts a string to a number value (unless NaN)
    var passwordLength = parseInt(userLengthInput);

    if (isNaN(passwordLength)) {
        window.alert("That's not a number!");
        return;
    } 

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("You must have at least 8 characters and no more than 128 characters.");
        return;
    }

    // series of prompts for password criteria
    var userLowerInput = window.confirm ("Would you like at least one lower case character in your passowrd?");
    var userUpperInput = window.confirm ("Would you like at least one upper case character in your passowrd?");
    var userNumberInput = window.confirm ("Would you like at least one number in your passowrd?");
    var userSymbolInput = window.confirm ("Would you like at least one special character in your passowrd?");


    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArray = [];
    var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
    for (i = 0; i < lowerCaseArray.length; i++){
        upperCaseArray[i] = lowerCaseArray[i].toUpperCase();
    }


    // array that contains user input 
    var passwordCriteria = []


    // if user clicks cancel, the variable is false
    if (userLowerInput === true){
        passwordCriteria.push(lowerCaseArray);
    }

    if (userUpperInput === true){
        passwordCriteria.push(upperCaseArray); 
    }

    if (userNumberInput === true){
        passwordCriteria.push(numbersArray); 
    }

    if (userSymbolInput === true){
        passwordCriteria.push(symbolArray); 
    }

    if (passwordCriteria.length === 0){
        passwordCriteria.push(lowerCaseArray);
    }



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (Whenever you "click" on the button, then the 'writePassword' function will run)
generateBtn.addEventListener("click", writePassword);