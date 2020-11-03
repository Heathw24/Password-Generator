// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var charCount = prompt("How many characters do you want your password?");
     var length = parseInt(charCount);
     console.log(length)

    if (length < 8 || length > 128) {
        alert("Your password must be between 8 and 128 characters!");
    } 
    else { 
      var lowerCase = confirm("Do you want lowercase character?");
      var upperCase = confirm("Do you want Uppercase character?");
      var num = confirm("Do you want a Numeric character?");
      var special = confirm("Do you want a special character?");

      if (lowerCase == false && upperCase == false && num == false && special == false) {
        alert("You must select atleast one type of character!");
      } 
      else {
        
        var lowerChar = (lowerCase) ? "abcdefghijklmnopqrstuvwxyz" : "";
        var upperChar = (upperCase) ? "ABCDEFGHIJKLMNOPQRSTUVWXTZ" : "";
        var numChars = (num) ? "0123456789" : "";
        var specialChar = (special) ? "!@#$%^&*()" : "" ;

        var passwordChar = lowerChar + upperChar + numChars + specialChar;
        console.log(passwordChar);
        var password = ""

        for ( var i = 0 ; i < length; i++) {
          var x = Math.floor(Math.random() * passwordChar.length);
          password = password + (passwordChar[x]);
        }

        if (lowerCase == true) {
          var q = Math.floor(Math.random() * lowerChar.length);
          password[0] = lowerChar[q];
        }

        if (upperCase == true) {
          var r = Math.floor(Math.random() * upperChar.length);
          password[1] = upperChar[r];
        }

        if (numChars == true) {
          var s = Math.floor(Math.random() * numChars.length);
          password[2] = numChars[s];
        }

        if (special == true) {
          var t = Math.floor(Math.random() * specialChar.length);
          password[3] = specialChar[t];
        }

        

        return password;

      }

    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
