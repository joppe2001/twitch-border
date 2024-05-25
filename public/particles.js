document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.getElementById('particles');
    const numParticles = 100;
    const numShootingStars = 2;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 2; // Varying sizes between 2px and 5px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Varying opacity
        particleContainer.appendChild(particle);
    }
    
    for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDelay = `${Math.random() * 10}s`;
        shootingStar.style.animationDuration = '3s';
        shootingStar.style.width = `${Math.random() * 2 + 1}px`; // Varying widths between 1px and 3px
        shootingStar.style.height = `${Math.random() * 100 + 50}px`; // Varying heights between 50px and 150px
        particleContainer.appendChild(shootingStar);
    }
});

// Particle styles
const style = document.createElement('style');
style.innerHTML = `
.particle {
    position: absolute;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%);
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5);
    animation: particle-move 10s linear infinite;
}

@keyframes particle-move {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-150%) translateX(100%);
        opacity: 0;
    }
}

.shooting-star {
    position: absolute;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.5);
    animation: shooting-star-move 3s linear infinite;
}

@keyframes shooting-star-move {
    0% {
        transform: translateY(-100vh) translateX(-100vw);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) translateX(100vw);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
