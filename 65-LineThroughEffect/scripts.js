const progressDone = document.querySelectorAll('.progress-done');
const textArr = text.innerText.split('');

const newEl = document.createElement('h1');
newEl.innerHTML = `
    ${textArr.map(letter => `<span class="letter" style="${randomVisibility()}">${letter}</span>`).join('')}
`;
