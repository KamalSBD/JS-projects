function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbol){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*"
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbol ? symbolChars : "";
    allowedChars += includeNumbers ? numberChars : "";

    console.log(allowedChars);

    if(length <=8){
        return `(Password length must be at least 8A)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs t obe selected)`;
     } 
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    } 
   
   
     return password;


}


const passwordLength = 25;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbol = true;

const password = generatePassword(passwordLength,
     includeLowercase,
      includeUppercase, includeNumbers, includeSymbol);

console.log(`Generated Password : ${password}`);