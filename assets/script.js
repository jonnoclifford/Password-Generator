const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

const charOptions = [];

const generatedPassword = '';

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


function getColor() {
  const color = prompt("Choose your color red 🔴 or blue 🔵");
  if (color.toLowerCase() !== 'red' && color.toLowerCase() !== 'r' && color.toLowerCase() !== 'red 🔴' && color !== '🔴') {
    alert("You have chosen poorly....try again 💤");
    return getColor();
  }

  alert("Good choice...you may proceed 🐇");
  return getPasswordOptions();
}

function getPasswordOptions() {

    const length = prompt("Enter the length of the password (between 8 and 128 characters):");


    if (!length || isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a valid length between 8 and 128 characters.");
      return getPasswordOptions();
    }

  const includeLower = confirm("Include lowercase characters?");
  const includeUpper = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

    if (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
      alert("At least one character type must be selected.");
      return getPasswordOptions();
    }

  charOptions.length = 0;

    if (includeLower) charOptions.push(...lowerCasedCharacters);
    if (includeUpper) charOptions.push(...upperCasedCharacters);
    if (includeNumeric) charOptions.push(...numericCharacters);
    if (includeSpecial) charOptions.push(...specialCharacters);

    return { length, charOptions };
}

function getRandom(arr) {

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword(options) {
  let password = '';

  for (let i = 0; i < options.length; i++) {
    const randomChar = getRandom(options.charOptions);
    password += randomChar;
  }

  alert("You have entered the Matrix 😎");

  return password;
}


const generateBtn = document.querySelector('#generate');

function writePassword() {
  const options = getColor();
  const password = generatePassword(options);
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword);
