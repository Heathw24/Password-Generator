// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomLower (lowerChar) {
  var L = Math.floor(Math.random() * lowerChar.length);
  console.log(L);
  return lowerChar[L];
} 

function getRandomUpper (upperChar) {
  var U = Math.floor(Math.random() * upperChar.length);
  console.log(U);
  return upperChar[U];
}

function getRandomNum (numChars) {
  var N = Math.floor(Math.random() * numChars.length);
  console.log(N);
  return numChars[N];
} 

function getRandomSpecial (specialChar) {
  var S = Math.floor(Math.random() * specialChar.length);
  console.log(S);
  return specialChar[S];
} 

function generatePassword() {
  var charCount = prompt("How many characters do you want your password?");
     var length = parseInt(charCount);

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
        
        // if (lowerCase == true) {
        //   lowerChar = "abcdefg";
        // }  else {
        //   lowerChar = "";
        // }

        var lowerChar = (lowerCase) ? "abcdefghijklmnopqrstuvwxyz" : "";
        var upperChar = (upperCase) ? "ABCDEFGHIJKLMNOPQRSTUVWXTZ" : "";
        var numChars = (num) ? "0123456789" : "";
        var specialChar = (special) ? "!'+,-./<>=?[]_{}|~@#$%^&*():;" : "" ;

        var passwordChar = lowerChar + upperChar + numChars + specialChar;
        var password = ""

        if (lowerCase) {
          var char = getRandomLower(lowerChar);
          password = password + char;
          console.log(password);
        }

        if (upperCase) {
          var char = getRandomUpper(upperChar);
          password = password + char;
          console.log(password);
        }

        if (num) {
          var char = getRandomNum(numChars);
          password = password + char;
          console.log(password);
        }

        if (special) {
          var char = getRandomSpecial(specialChar);
          password = password + char;
          console.log(password);
        }
           

        for ( var i = password.length ; i < length; i++) {
          var x = Math.floor(Math.random() * passwordChar.length);
          password = password + (passwordChar[x]);
        }


        return password;

      }

    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
