// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Ask user for length
    // (Minimum of 8 Charachters, Maximum of 128)
    let passwordLength = parseInt(prompt("How long should the password be?"));
    // Validate Length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error, invalid password length.\nPlease choose a password greater than 8 and less than 128 characters.");
        return "";
    }

    // Ask user for which characters to include
    var includeLowercase = confirm("Include Lowercase letters in password?")
    var includeUppercase = confirm("Include uppercase letters in password")
    var includeNumbers = confirm("Include numbers in password")
    var includeSpecialCharacters = confirm("Include special characrers in password?")
    // Validate types of characters
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
        alert("Error, invalid character types.\nPlease include at least one type of character.");
        return "";
    }

    // generate a random password
    let passwordCharacters = [];
    let lowercaseCharacters = [];
    let uppercaseCharacters = [];
    let numbersCharacters = [];
    const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const lowercaseCharactersstring = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharactersstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberscaseCharactersstring = "1234567890";

    //  handle other character types

    if (includeSpecialCharacters) {
        passwordCharacters = specialCharacters.split('');
    }
    if (includeLowercase) {
        lowercaseCharacters = lowercaseCharactersstring.split('');
    }
    if (includeUppercase) {
        uppercaseCharacters = uppercaseCharactersstring.split('');
    }
    if (includeNumbers) {
        numbersCharacters = numberscaseCharactersstring.split('');
    }

    let results = '';
    for (var i = 0; i < passwordLength; i++) 
    {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        let randomCharacter = passwordCharacters[randomIndex];
        let randomlowercaseindex = Math.floor(Math.random() * lowercaseCharacters.length);
        let randomuppercaseindex = Math.floor(Math.random() * uppercaseCharacters.length);
        let randomnumberindex = Math.floor(Math.random() * numbersCharacters.length);
        let randomlowercaseCharacter = lowercaseCharacters[randomlowercaseindex];
        let randomuppercaseCharacter = uppercaseCharacters[randomuppercaseindex];
        let randomnumberCharacter = numbersCharacters[randomnumberindex];
        results += randomCharacter + randomlowercaseCharacter + randomuppercaseCharacter + randomnumberCharacter;
    }

if(results.length > passwordLength)
{
    results=results.substring(0,passwordLength);
}

    // Return Generated password
    return results;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.textContent = password;
    console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
