document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likesElement = button.closest('.post').querySelector('.likes');
            let currentLikes = parseInt(likesElement.textContent);
            if (button.textContent === '🤍') {
                button.textContent = '❤️';
                likesElement.textContent = `${currentLikes + 1} likes`;
            } else {
                button.textContent = '🤍';
                likesElement.textContent = `${currentLikes - 1} likes`;
            }
        });
    });

    // Wonderland checkerboard color cycling on scroll (smooth)
    const checkerColors = [
        ['#d13336', '#000'], // Red & Black
        ['#a259a4', '#fff'], // Purple & White
        ['#2e86c1', '#f7ca18'], // Blue & Gold
        ['#e67e22', '#1abc9c'], // Orange & Teal
        ['#e60026', '#f7f7f7']  // Alice Red & Light
    ];

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const idx = Math.floor(scrollY / 300) % checkerColors.length;
        const [color1, color2] = checkerColors[idx];
        document.body.style.setProperty('--checker1', color1);
        document.body.style.setProperty('--checker2', color2);
    });
}); 