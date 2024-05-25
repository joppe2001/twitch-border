document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.getElementById('particles');
    const numParticles = 100;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 2; // Varying sizes between 2px and 5px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const position = Math.random() * 100;
        if (position < 25) { // Top edge
            particle.style.top = `${Math.random() * 10}%`;
            particle.style.left = `${Math.random() * 100}%`;
        } else if (position < 50) { // Bottom edge
            particle.style.top = `${90 + Math.random() * 10}%`;
            particle.style.left = `${Math.random() * 100}%`;
        } else if (position < 75) { // Left edge
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 10}%`;
        } else { // Right edge
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${90 + Math.random() * 10}%`;
        }

        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Varying opacity
        particleContainer.appendChild(particle);
    }
});
