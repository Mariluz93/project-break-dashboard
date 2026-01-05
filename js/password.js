const passwordResult = document.getElementById('passwordResult');
const length = document.getElementById('length');
const passwordButton = document.getElementById('button');

const number = "0123456789"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&*()-_=+"

length.addEventListener('input', () => {
    let value = parseInt(length.value, 10);

    if (isNaN(value)) return;

    if (value > 50) length.value = 50;
    if (value < 12) length.value = 12;
});

function randomNumber(max) {
    rNumber = Math.floor(Math.random() * max)
    return rNumber;
}


function generatePassword() {
    const all = number + upper + lower + symbols;
    
    let passwordLength = parseInt(length.value, 10);

    const password = [];

    const randomNum = number[randomNumber(number.length)];
    const randomUpper = upper[randomNumber(upper.length)];
    const randomLower = lower[randomNumber(lower.length)];
    const randomSymbol = symbols[randomNumber(symbols.length)];


    password.push(randomLower, randomNum, randomSymbol, randomUpper)
    
    for (let i = password.length; i < passwordLength; i++) {
        let random = all[randomNumber(all.length)]
        password.push(random);
    }

    const finalPassword = password.sort(() => Math.random() - 0.5).join("");

    passwordResult.textContent = finalPassword;
}
passwordButton.addEventListener('click', generatePassword);


