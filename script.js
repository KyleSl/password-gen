// Assignment Code
var generateBtn = document.querySelector("#generate");


// Lowercase letters start at ascii = 97

var specialChars = ["!", "\"", "#", "$", "%", "&", "\'",
 "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<",
  "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{",
"|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Gathers user inputs for criteria about their password, 
// then generates a password following those criteria and returns it
function generatePassword() {
  var password = "";

  // User input variables
  var includeNumbers;
  var includeSpecials;
  var includeUppers;
  var includeLowers;
  var length;

  // User validation variable
  var valid = false;

  // User validation loop
  while(!valid){
    includeNumbers = confirm("Do you want to include numbers in your password? \n(OK = yes | Cancel = no)");
    includeSpecials = confirm("Do you want to include special characters in your password? \n(OK = yes | Cancel = no)");
    includeLowers = confirm("Do you want to include lowercase letters in your password? \n(OK = yes | Cancel = no)");
    includeUppers = confirm("Do you want to include uppercase letters in your password? \n(OK = yes | Cancel = no)");
    if(includeLowers || includeUppers || includeSpecials || includeNumbers){
      valid = true;
    }
  }

  // Reset validation variable
  valid = false;

  // User validation loop using prompt() instead of confirm()
  while(!valid){
    length = prompt("How long do you want your password to be? (8 - 128)");
    if(length > 7 && length < 129){
      valid = true;
    }
  }

  // For loop to generate the password
  for(var i = 0; i < length; i++){
    var selector = Math.floor(Math.random() * 4);
    // 0 -> lowercase
    // 1 -> uppercase
    // 2 -> number
    // 3 -> special

    // If the random selector picks a certain category and the user allowed that category to be in the password,
    // A random character from that category is added to the password
    // If the user did not allow that category, 
    // then i-- is done to allow the loop to restart without changing anything.
    // There is a possibility for this program to get stuck looping forever and this makes it less efficient,
    // however, this is a small program so I didn't bother fixing it.
    if(selector == 0 && includeLowers){
      var char = String.fromCharCode(/*lowercase ascii starts at 97*/ 97 + Math.floor(Math.random() * 26));
      password += char;
      //console.log(0);
    }else if(selector == 1 && includeUppers){
      var char = String.fromCharCode(/*uppercase ascii starts at 65*/ 65 + Math.floor(Math.random() * 26));
      password += char;
      //console.log(1);
    }else if(selector == 2 && includeNumbers){
      var char = Math.floor(Math.random() * 10);
      password += char.toString(); // Cant add number data type to string
      //console.log(2);
    }else if(selector == 3 && includeSpecials){
      var char = specialChars[Math.floor(Math.random() * specialChars.length)];
      password += char;
      //console.log(3);
    }else{
      i--;
    }
  }

  // Returns the final password
  return password;
}