const ratingsEl = document.getElelementById('.rating');
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

sendBtn.addEventListener('click', () => {});


