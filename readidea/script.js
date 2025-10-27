// Simple fade-in animation on page load
window.addEventListener('load', () => {
    const container = document.querySelector('.contact-container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Email link click tracking (optional)
const emailLink = document.querySelector('a[href^="mailto"]');
if (emailLink) {
    emailLink.addEventListener('click', () => {
        console.log('Email link clicked');
    });
}

// Kakao link click tracking (optional)
const kakaoLink = document.querySelector('.kakao-link');
if (kakaoLink) {
    kakaoLink.addEventListener('click', () => {
        console.log('KakaoTalk open chat link clicked');
    });
}

// Console branding
console.log('%c🌿 readidea', 'color: #c9a961; font-size: 20px; font-weight: bold;');
console.log('%c건강한 내일을 위한 선택', 'color: #1a1a1a; font-size: 12px;');
