const btnUp = document.querySelector('#btn-up')
window.sr = ScrollReveal({ reset: true });

sr.reveal('.header-do-read', { duration: 2000, reset: false });

sr.reveal('.head-container', {
    duration: 2000,
    delay: 200,
    distance: '80px',
    origin: 'top',
    reset: false
});

sr.reveal('.title', { duration: 2000, reset:false });

sr.reveal('.texto-sobre', { duration: 2000,
origin:'left',
distance:'50px',
reset:false
});

sr.reveal('.sobre-image', { 
    duration: 2000,
    delay:200,
    origin:'right',
    distance:'50px',
    reset:false
});

sr.reveal('.card-projetos', { 
    duration: 2000,
    delay:200,
    // distance: '80px',
    // origin: 'top',
    // rotate: { x: 90, y: 80, z: 50},
    reset:false
});

sr.reveal('.card-icons', { 
    duration: 2000,
    delay:200,
    distance: '80px',
    origin: 'top',
    rotate: { x: 0, y: 80, z: 0},
    reset:false

});





btnUp.addEventListener('click', () => {
    window.scrollTo(0, 0)
    document.removeEventListener('scroll', ocult)
})

const ocult = () => {
    if (window.scrollY > 10) {
        btnUp.style.display = 'flex'
    } else {
        btnUp.style.display = 'none'
    }
}

document.addEventListener('scroll', () => {
    ocult()
    document.removeEventListener('scroll', ocult)
})

ocult()