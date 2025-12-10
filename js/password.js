const passwordResult = document.getElementById('passwordResult');
const length = document.getElementById('length');
const passwordButton = document.getElementById('button');

const number = "0123456789"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&*()-_=+"

function randomNumber(max) {
    rNumber = Math.floor(Math.random() * max)
    return rNumber;
}
passwordButton.addEventListener('click', () => {
    function generatePassword() {
        const all = number + upper + lower + symbols;
    
        const passwordLength = parseInt(length.value);
        const randomNum = number[randomNumber(number.length)];
        const randomUpper = upper[randomNumber(upper.length)];
        const randomLower = lower[randomNumber(lower.length)];
        const randomSymbol = symbols[randomNumber(symbols.length)];

        const password = [];

        password.push(randomLower, randomNum, randomSymbol, randomUpper)
    
        for (let i = 4; i < passwordLength; i++) {
            let random = all[randomNumber(all.length)]
            password.push(random);
        }

        const finalPassword = password.sort(() => Math.random() - 0.5).join("");

        passwordResult.textContent = finalPassword;
    }
    
    generatePassword()
})


