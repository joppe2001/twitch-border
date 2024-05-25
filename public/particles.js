document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.getElementById('particles');
    const numParticles = 100;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 2; // Varying sizes between 2px and 5px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 3}s`;
        particleContainer.appendChild(particle);
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
    animation: particle-move 2s linear infinite;
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
`;
document.head.appendChild(style);
