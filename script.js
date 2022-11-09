// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button (Whenever you "click" on the button, then the 'writePassword' function will run)
generateBtn.addEventListener("click", writePassword);



function generatePassword (){

    // window.prompt returns a string value
    var lengthInput = window.prompt("How many characters would you like your passowrd to have? You must have at least 8 characters and no more than 128 characters.");
    // parseInt () converts a string value to a number value (unless NaN)
    var passwordLength = parseInt(lengthInput);

    if (isNaN(passwordLength)) {
        window.alert("That's not a number!");
        return;
    } 

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("You must have at least 8 characters and no more than 128 characters.");
        return;
    }

    // Series of prompts for password criteria
    var lowercaseInput = window.confirm ("Would you like at least one lower case character in your passowrd?");
    var uppercaseInput = window.confirm ("Would you like at least one upper case character in your passowrd?");
    var numberInput = window.confirm ("Would you like at least one number in your passowrd?");
    var specialInput = window.confirm ("Would you like at least one special character in your passowrd?");


    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseArray = [];
    var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
    for (i = 0; i < lowercaseArray.length; i++){
        uppercaseArray[i] = lowercaseArray[i].toUpperCase();
    }


    // Empty array that will contain the users input 
    var criterias = []


    // Validating the user input
    if (lowercaseInput){
        criterias.push(lowercaseArray);
    }

    if (uppercaseInput){
        criterias.push(uppercaseArray); 
    }

    if (numberInput){
        criterias.push(numbersArray); 
    }

    if (specialInput){
        criterias.push(specialArray); 
    }

    if (criterias.length === 0){
        criterias.push(lowercaseArray);
    }

    // Empty string that will contain random charcters
    var generatedPassword = ""

    // Returns a random item from an index
    function randomItem (value) {
        return value[Math.floor(Math.random() * value.length)];
    }

    // The 'generatedPassword' variable addes to itself a random character from a random array
    for (i = 0; i < passwordLength; i++){
        var randomArray = randomItem (criterias);
        var randomChar = randomItem (randomArray);
        generatedPassword += randomChar;
    }

    return generatedPassword;
}


// The password is written to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }