document.addEventListener("DOMContentLoaded", function () {
    // Code d'animation de texte
    const textElement = document.querySelector('.typing-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;
    const speed = 100;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // Effet de survol des cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Validation de formulaire de contact
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const submitButton = document.querySelector('#submit');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (emailInput.value === '' || messageInput.value === '') {
            alert('Veuillez remplir tous les champs.');
        } else {
            alert('Message envoyé avec succès !');
            form.reset();
        }
    });

    // Scroll fluide
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Code d'effets de chargement
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'; // Cache le loader une fois la page chargée
});
