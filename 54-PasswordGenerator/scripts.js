const resultEl = document.getElelementById('result');
const lengthEl = document.getElelementById('length');
const uppercaseEl = document.getElelementById('uppercase');
const lowercaseEl = document.getElelementById('lowercase');
const numberscaseEl = document.getElelementById('numbers');
const symbolsEl = document.getElelementById('symbols');
const generateEl = document.getElelementById('generate');
const clipboardEl = document.getElelementById('clipboard');

const randomFunc = {
    lower: getRandomLower, 
    upper: getRandomUpper, 
    number: getRandomNumber, 
    symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
});

generate.addEventListener('click', () => {});

function generatePassword(lower, upper, number, symbol, length) {}

function getRandomLower() {}

function getRandomUpper() {}

function getRandomNumber() {}

function getRandomSymbol() {}
