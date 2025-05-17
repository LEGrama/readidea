// 네비게이션 바 스크롤 효과
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
});

// 모바일 메뉴 토글
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // 토글 네비게이션
    nav.classList.toggle('active');
    
    // 링크 애니메이션
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // 버거 애니메이션
    burger.classList.toggle('toggle');
});

// 스크롤 애니메이션
const scrollElements = document.querySelectorAll('.feature-card');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// 페이지 로드 시 초기 애니메이션 체크
window.addEventListener('load', () => {
    handleScrollAnimation();
});

// 문의하기 버튼에 마우스 오버 시 히어로 밝기 효과 + SVG 창문 불빛 효과
const ctaButton = document.getElementById('ctaButton');
const heroSection = document.querySelector('.hero');
const cityBg = document.querySelector('.city-bg-svg');

function setCityWindows(lightOn) {
    if (!cityBg) return;
    const windows = cityBg.querySelectorAll('.window');
    windows.forEach(win => {
        if (lightOn) {
            win.setAttribute('fill', '#FFD600');
        } else {
            win.setAttribute('fill', '#222');
        }
    });
}

if (ctaButton && heroSection) {
    ctaButton.addEventListener('mouseenter', () => {
        heroSection.classList.add('bright');
        setCityWindows(true);
    });
    ctaButton.addEventListener('mouseleave', () => {
        heroSection.classList.remove('bright');
        setCityWindows(false);
    });
}
// 페이지 로드 시 창문 상태 초기화
window.addEventListener('DOMContentLoaded', () => setCityWindows(false));

// 갤러리 슬라이더(자동 전환, 마우스 오버 시 멈춤)
const sliders = document.querySelectorAll('.gallery-slider');
sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    let idx = 0;
    let interval = null;
    function showImage(i) {
        images.forEach((img, j) => img.classList.toggle('active', i === j));
    }
    function startSlider() {
        interval = setInterval(() => {
            idx = (idx + 1) % images.length;
            showImage(idx);
        }, 2500);
    }
    function stopSlider() {
        clearInterval(interval);
    }
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
    showImage(idx);
    startSlider();
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = '#fff';
        nav.style.boxShadow = 'none';
    }
});

// 현재 페이지 메뉴 활성화
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}); 