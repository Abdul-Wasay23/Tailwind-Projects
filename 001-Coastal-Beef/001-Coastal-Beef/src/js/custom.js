import '../css/custom.css';
import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", function () {
    const progressSection = document.querySelector(".progress-section");
    const progressFill = document.querySelector(".progress-fill");
    const progressText = document.querySelector(".progress-text");
    let animated = false;

    function animateProgress() {
        const rect = progressSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !animated) {
            animated = true;
            let percent = 0;
            const target = 90; // Target percentage

            const interval = setInterval(() => {
                if (percent <= target) {
                    progressFill.style.width = percent + "%";
                    progressText.textContent = percent + "%";
                    percent++;
                } else {
                    clearInterval(interval);
                }
            }, 20); // smooth animation
        }
    }

    window.addEventListener("scroll", animateProgress);

    // Banner Swiper
    const bannerSwiper = new Swiper('.banner-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                updateBannerProgress(this);
            },
            slideChange: function () {
                updateBannerProgress(this);
            }
        }
    });

    function updateBannerProgress(swiper) {
        const originalSlides = swiper.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
        const total = originalSlides.length;
        const current = (swiper.realIndex + 1);
        const progress = (current / total) * 100;

        const fill = document.querySelector('.banner-progress-bar-fill');
        const currentText = document.querySelector('.banner-current');
        const totalText = document.querySelector('.banner-total');

        if (fill) fill.style.width = `${progress}%`;
        if (currentText) currentText.textContent = current < 10 ? `0${current}` : current;
        if (totalText) totalText.textContent = total < 10 ? `0${total}` : total;
    }

    // Circular Text Generator
    const circleText = "COASTAL BEEF FRESH - PASTURE RAISED - ";
    const circleContainer = document.getElementById('banner-circle-text');
    if (circleContainer) {
        circleContainer.innerHTML = circleText.split('').map((char, i) =>
            `<span style="transform:rotate(${i * (360 / circleText.length)}deg)">${char}</span>`
        ).join('');
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('#mobile-nav a');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.remove('translate-x-full');
        });
    }

    if (closeMenuBtn && mobileNav) {
        closeMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('translate-x-full');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('translate-x-full');
        });
    });

    // Arrival Swiper
    new Swiper('.arrival-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
        },
    });

    // Feature Swiper
    new Swiper('.feature-swiper', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
        },
    });

    // Testimonial Swiper
    const testiSwiper = new Swiper('.testi-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.testi-next',
            prevEl: '.testi-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
        on: {
            slideChange: function () {
                const originalSlides = this.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
                const total = originalSlides.length;
                const current = (this.realIndex + 1);
                const progress = (current / total) * 100;
                const progressFill = document.querySelector('.testi-progress');
                if (progressFill) progressFill.style.width = `${progress}%`;
            }
        }
    });

    // Initialize progress bar for testimonials on load
    const originalTestiSlides = testiSwiper.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    const testiTotal = originalTestiSlides.length;
    const testiInitialProgress = (1 / testiTotal) * 100;
    const testiProgressFill = document.querySelector('.testi-progress');
    if (testiProgressFill) testiProgressFill.style.width = `${testiInitialProgress}%`;
});
