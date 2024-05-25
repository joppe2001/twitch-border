document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.getElementById('particles');
    const numParticles = 100;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particleContainer.appendChild(particle);
    }
});

// Particle styles
const style = document.createElement('style');
style.innerHTML = `
.particle {
    position: absolute;
    width: 5px;
    height: 5px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 100%);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
    animation: particle-move 10s linear infinite;
}

@keyframes particle-move {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) translateX(50vw);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
