// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialcharacters = "!@#$%^&*(){}[]/><;:?";
var numerics = "01234456789";
// var passwordlength = "length";


function generatePassword() {


  var savedPassword = ""
  // create an array to randomly choose from the variables and also loop

  // const password = [uppercase, lowercase, specialcharacters, numerics, userLength];
  // document.getElementById('generate').addEventListener('click', function)
  // { alert(generatePassword()); }

  var userLength = window.prompt
    ("Please pick amount of characters between 8 and 128")
  if (userLength >= 8 && userLength <= 128) {
    var isLowerCase = window.confirm("include lowercase characters")

    var isNumeric = window.confirm("include numerics")

    var isSpecialCharacters = window.confirm("include Special Characters")
    var isUpperCase = window.confirm("Include upper case letters")
    for (var i = 0; i <= userLength; i++) {
      //   var randomIndex = Math.floor(Math.random() * passwordlength.length)
      //   savedPassword = savedPassword + passwrodlength[randomIndex]
      // // }

      if (isSpecialCharacters === true && savedPassword.length < userLength) {
        var randomIndex = Math.floor(Math.random() * specialcharacters.length)
        savedPassword = savedPassword + specialcharacters[randomIndex]
      }
      if (isNumeric === true && savedPassword.length < userLength) {
        var randomIndex = Math.floor(Math.random() * numerics.length)
        savedPassword = savedPassword + numerics[randomIndex]
      }
      if (isLowerCase === true && savedPassword.length < userLength ) {
        var randomIndex = Math.floor(Math.random() * lowercase.length)
        savedPassword = savedPassword + lowercase[randomIndex]
      }

      if (isUpperCase === true && savedPassword.length < userLength) {
        var randomIndex = Math.floor(Math.random() * uppercase.length)
        savedPassword = savedPassword + uppercase[randomIndex]
      }
      if (isLowerCase == false && isNumeric == false && isSpecialCharacters == false && isUpperCase == false) {
        window.alert("Must pick at least one element")
        return ""
      }
    }

    // for (var i = 0; i < userLength + UpperCase + LowerCase + Numerics + SpecialCharacters.length; i++) { 
    //   console.log( savedPassword + userLength[i] + ".");}



    // for (let i = 0; i < userLength; i++) {
    //   var random = Math.floor(Math.random() * userLength)
    //    savedPassword = savedPassword + userLength[randomIndex]
    // }
    // let savedPassword = ""
    // for (let i = 0; i < userLength; i++) {
    //  let rng = [Math.floor(Math.random() * userLength.length)];}
    //  for (let i = 0; i < characterAmount; i++) {
    // var randomIndex = Math.floor(Math.random() * userLength.length)
    // savedPassword = savedPassword + userLength[randomIndex]}

  } else {
    window.alert("Invalid outside of range")
  }

  return savedPassword;




  console.log(isUpperCase)

  console.log(isSpecialCharacters)

  console.log(isNumeric)

  console.log(isLowerCase)


  // console.log(userLength)



  // var password = generatePassword(passwordLength);
  // console.log('Generated Password:', password);







}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var userlength = 8;
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
