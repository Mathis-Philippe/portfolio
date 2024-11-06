const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    setTimeout(() => {
        loader.classList.add('fondu_out');
    },1000)

    

})

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenBottom = window.innerHeight;
        
        if (sectionTop < screenBottom) {
            section.classList.add('visible');
        }
    });
});
function toggleMenu() {
    const mobileMenu = document.querySelector('.menu_navbar_mobile');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}
