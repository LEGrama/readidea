// Gallery slider functionality
class GallerySlider {
    constructor(element) {
        this.slider = element;
        this.slides = this.slider.querySelectorAll('.slide');
        this.dots = this.slider.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.isAutoPlaying = true;
        
        this.init();
    }
    
    init() {
        // Set initial slide
        this.showSlide(this.currentSlide);
        
        // Add click event to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index);
                this.resetAutoPlay();
            });
        });
        
        // Add click event to slides for next slide
        this.slides.forEach(slide => {
            slide.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoPlay();
            });
        });
        
        // Add mouseover/mouseout events to pause/resume autoplay
        this.slider.addEventListener('mouseover', () => {
            this.pauseAutoPlay();
        });
        
        this.slider.addEventListener('mouseout', () => {
            this.resumeAutoPlay();
        });
        
        // Start autoplay
        this.startAutoPlay();
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove active class from all dots
        this.dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate corresponding dot
        this.slides[index].style.display = 'block';
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        let next = this.currentSlide + 1;
        if (next >= this.slides.length) {
            next = 0;
        }
        this.showSlide(next);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    pauseAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.isAutoPlaying = false;
    }
    
    resumeAutoPlay() {
        if (!this.isAutoPlaying) {
            this.startAutoPlay();
            this.isAutoPlaying = true;
        }
    }
    
    resetAutoPlay() {
        this.pauseAutoPlay();
        this.resumeAutoPlay();
    }
}

// Initialize all gallery sliders
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.gallery-slider');
    sliders.forEach(slider => {
        new GallerySlider(slider);
    });
}); 