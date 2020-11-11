const trickBtn = document.getElementById('trick');
const btnContainer = document.querySelector('.btn-container');
// setting it initially
btnContainer.style.flexDirection = 'row';

trickBtn.addEventListener('mouseover', (e) => {
    const currentDir = btnContainer.style.flexDirection;
    if(currentDir === 'row') {} else {
        btnContainer.stle.fleDirections = 'row';
    }
})

