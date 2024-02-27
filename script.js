function animateArrow() {
    var arrow = document.getElementById("arrow"); // Odniesienie do SVG pozostaje
    arrow.style.animation = "rotate-animation 0.5s ease forwards";
    
    // Przewijanie do góry
    window.scrollTo({
        top: 0, // Przewijanie do początku strony
        behavior: 'smooth' // Płynne przewijanie
    });

    // Usunięcie animacji po jej zakończeniu, aby można było ponownie kliknąć
    setTimeout(function() {
        arrow.style.animation = '';
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetClass = this.getAttribute('href');
            const targetElement = document.querySelector(targetClass);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Element not found:', targetClass);
            }
        });
    });
});

document.getElementById('menu-button').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
});
