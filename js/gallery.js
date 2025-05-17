// 갤러리 이미지 로딩 및 슬라이더 관리
class GalleryManager {
    constructor() {
        this.categories = ['public', 'residential', 'extension', 'repair'];
        this.sliders = {};
        this.currentIndices = {};
        this.autoPlayIntervals = {};
        
        // 각 카테고리별 이미지 파일명 배열 (jpg와 png 모두 지원)
        this.images = {
            public: ['public1.png', 'public2.png'],
            residential: ['residential1.png', 'residential2.png'],
            extension: ['extension1.png', 'extension2.png'],
            repair: ['repair1.png', 'repair2.png']
        };
    }

    // 이미지 로딩
    loadImages() {
        for (const category of this.categories) {
            this.initializeSlider(category, this.images[category]);
        }
    }

    // 슬라이더 초기화
    initializeSlider(category, images) {
        const slider = document.querySelector(`.gallery-slider[data-category="${category}"]`);
        if (!slider) return;

        // 이미지 요소 생성
        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = `/images/gallery/${category}/${image}`;
            img.alt = `${category} 시공사례 ${index + 1}`;
            img.style.display = 'none'; // 모든 이미지를 숨김
            img.onerror = () => {
                console.error(`Failed to load image: ${img.src}`);
                img.remove();
            };
            img.onload = () => {
                console.log(`Successfully loaded image: ${img.src}`);
                // 첫 번째 로드된 이미지만 표시
                if (index === 0) {
                    img.style.display = 'block';
                }
            };
            slider.appendChild(img);
        });

        // 슬라이더 상태 초기화
        this.sliders[category] = slider;
        this.currentIndices[category] = 0;
        this.startAutoPlay(category);
    }

    // 이미지 전환
    showImage(category, index) {
        const slider = this.sliders[category];
        if (!slider) return;

        const images = slider.querySelectorAll('img');
        if (images.length === 0) return; // 이미지가 없는 경우 처리
        
        if (index >= images.length) index = 0;
        if (index < 0) index = images.length - 1;

        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
        this.currentIndices[category] = index;
    }

    // 자동 재생 시작
    startAutoPlay(category) {
        this.autoPlayIntervals[category] = setInterval(() => {
            this.showImage(category, this.currentIndices[category] + 1);
        }, 3000);
    }

    // 자동 재생 정지
    stopAutoPlay(category) {
        if (this.autoPlayIntervals[category]) {
            clearInterval(this.autoPlayIntervals[category]);
        }
    }

    // 마우스 이벤트 처리
    setupEventListeners() {
        this.categories.forEach(category => {
            const slider = this.sliders[category];
            if (!slider) return;

            slider.addEventListener('mouseenter', () => this.stopAutoPlay(category));
            slider.addEventListener('mouseleave', () => this.startAutoPlay(category));
        });
    }
}

// 갤러리 매니저 초기화
document.addEventListener('DOMContentLoaded', () => {
    const galleryManager = new GalleryManager();
    galleryManager.loadImages();
    galleryManager.setupEventListeners();
}); 