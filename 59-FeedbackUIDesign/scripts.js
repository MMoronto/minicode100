const ratingsEl = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

ratingsEl.forEach(el => {
    el.addEventListener('click', () => {
        ratingsEL.forEach(innerEl => {
            innerEl.classList.remove('active');
        });

        el.classList.add('active');
    });
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you, Mobola!</strong>
    <p>We shall incorporate your feedback into our customer support improvement process.</p>
    <button class="btn">Done</button>
    `;
});


