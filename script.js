document.addEventListener("DOMContentLoaded", function() {
    // Add glow effect on social media icons
    const icons = document.querySelectorAll('.icons a');

    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const href = icon.getAttribute('href');
            const color = getComputedStyle(icon).color;
            icon.style.boxShadow = `0 0 20px 5px ${color}`;
            setTimeout(() => {
                icon.style.boxShadow = 'none';
                window.open(href, '_blank');
            }, 300);
        });
    });

    // Add glow effect to project links
    const projectLinks = document.querySelectorAll('.glow-on-hover');

    projectLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.boxShadow = '0 0 20px 5px #00ff99';
        });
        link.addEventListener('mouseout', () => {
            link.style.boxShadow = 'none';
        });
    });

    // Add interactive animations for the cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
        });
    });

    // Add color-changing effect on hover for the header
    const header = document.querySelector('header');

    header.addEventListener('mouseover', () => {
        header.style.background = 'linear-gradient(135deg, #2c3e50, #4ca1af)';
    });

    header.addEventListener('mouseout', () => {
        header.style.background = '#121212';
    });
});
