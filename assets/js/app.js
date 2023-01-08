// Dark header

const header = document.querySelector('.header');
const intro = document.querySelector('.intro');

window.addEventListener('scroll', () => {
    if (window.scrollY >= intro.offsetHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Smooth scroll

const navLinks = document.querySelectorAll('[data-link]');

navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let currentId = item.getAttribute('data-link');
        let currentSection = document.querySelector(currentId);

        nav.classList.remove('nav--show'); // for burger menu
        burger.classList.remove('burger--active'); // for burger menu
        document.querySelector('body').classList.remove('show-nav'); // for burger menu

        currentSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    });
});

// Burger menu

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--show');
    this.classList.toggle('burger--active');
    document.querySelector('body').classList.toggle('show-nav');
});

// ScrollSpy

const sections = document.querySelectorAll('[data-scrollspy]');
const windowHeight = window.innerHeight;

sections.forEach(item => {
    navLinks.forEach(link => {
        let sectionOffset = item.offsetTop;
        sectionOffset = sectionOffset - windowHeight * 0.5;
        let sectionId = item.getAttribute('data-scrollspy');
        let linkId = link.getAttribute('data-link');
        window.addEventListener('scroll', () => {
            if ((window.scrollY >= sectionOffset) & (sectionId == linkId)) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                });
                link.classList.add('nav__link--active');
            }
            if (window.scrollY == 0) {
                link.classList.remove('nav__link--active');
            }
        });
    });
});

// Modals

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('modal--show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');
        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;
        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('modal--show');
        body.classList.remove('no-scroll');
    }, 200);
}
