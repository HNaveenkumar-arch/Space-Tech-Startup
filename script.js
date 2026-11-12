
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');


        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';


        document.body.classList.remove('no-scroll');


        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
        });

    }, 1000); 
});


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const mobileBtns = document.querySelectorAll('.mobile-btn');

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');


    if (mobileMenu.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

hamburger.addEventListener('click', toggleMenu);


const closeMobileElements = [...mobileLinks, ...mobileBtns];

closeMobileElements.forEach(element => {
    element.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});