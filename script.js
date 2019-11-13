function generatePassword() {
    var numChars = prompt("How many chars do you want? Please choose between 8-128.");
    if (numChars < 8 || numChars > 128) {
        alert("Please select a number between 8 and 128.");
        return;
    }
    var symbWanted = confirm("Do you want special chars?");
    var lowerWanted = confirm("Do you want lowercase chars?");
    var upperWanted = confirm("Do you want uppercase chars?");
    var numWanted = confirm("Do you want numbers?");

    var symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';

    var all = upperCase + lowerCase + numbers + symbols;

    var randomLowerIndex = Math.floor(Math.random() * lowerCase.length);
    var randomLower = lowerCase[randomLowerIndex];
    var randomUpperIndex = Math.floor(Math.random() * upperCase.length);
    var randomUpper = upperCase[randomUpperIndex];
    var randomNumIndex = Math.floor(Math.random() * numbers.length);
    var randomNum = numbers[randomNumIndex];
    var randomSymbIndex = Math.floor(Math.random() * symbols.length);
    var randomSymb = symbols[randomSymbIndex];
    var password = '';
    var passwordDisplay = document.getElementById("password");
    for (var index = 0; index < numChars; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
        if (lowerWanted === true) {
            character += randomLower;
        }
        if (upperWanted === true) {
            character += randomUpper;
        }
        if (numWanted === true) {
            character += randomNum;
        }
        if (symbWanted === true) {
            character += randomSymb;
        }
        if (lowerWanted === false && upperWanted === false && numWanted === false && symbWanted === false) {
            alert("Please choose at least one type of character for your password.");
            generate();
        }
        passwordDisplay.innerHTML = password;
    }
    console.log(randomLowerIndex + " = random lower index");
    console.log(randomLower + " = random lower");
    console.log(randomUpperIndex + " = random upper index");
    console.log(randomUpper + " = random upper");
    console.log(randomNumIndex + " = random num index");
    console.log(randomNum + " = random num");
    console.log(randomSymbIndex + " = random symb index");
    console.log(randomSymb + " = random symb");
    console.log(numChars + " = password length");
    console.log(symbWanted + " = special chars");
    console.log(lowerWanted + " = lower chars")
    console.log(upperWanted + " = upper chars")
    console.log(numWanted + " = numbers")
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Copied to clipboard: " + password.value);
}

