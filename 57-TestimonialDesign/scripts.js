const authorsEl = document.querySelectorAll('.author');
const container = document.querySelector('.testimonials-container');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const testimonials = [{
    text: 'I have worked with him on several occasions. He is very attentive to details and exceeds expectations consistently.',
    name: 'Kedar Shah',
    color: 'rgba(235, 59, 90,1.0)'  
},{
    text: 'An old and trusted collegue recommended Morakinyo\'s services. I have worked with him since and I have never been dissapointed. I can\'t recommend him enough.'
    name: 'Rajar Kapoor',
    color: 'rgba(250, 130, 49,1.0)' 
},{
    text: 'Professional, very knowlegeable and dependable. I highly recommend Morakinyo.'
    name: 'Kelly Kavanaugh',
    color: 'rgba(75, 123, 236,1.0)'  
},{
    text: 'Morakinyo has helped my company get through several sticky situations with very tight deadlines. I am so glad he is an available resource for our development team.',
    name: 'Shelly Lambert',
    color: 'rgba(165, 94, 234,1.0)'  
},{
    text: 'Morakinyo has been a very valuable resource for my organisation. He is very knowledgeble and gets things done quickly and with suerior quality',
    name: 'Barry Weitcz',
    color: 'rgba(32, 191, 107,1.0)'   
}];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
    author.addEventListener('click', (e) => {
        addTestimonial(idx);
        author.classList.add('selected');
    })
});

function addTestiomonial(idx) {
    const testimonial = testimonials[idx];

    nameEl.innerHTML = testimonial.name;
    textEl.innerHTML = testimonial.text;
    container.style.background = testimonial.color;
    container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(0, testimonial.color.length-4)}0.9)`;

    authorsEl.forEach(author => {
        author.classList.remove('selected');
    });
}

