// chọn ngôn ngữ
const languageChoose = document.querySelector('.language-choose');
const languageMenu = document.querySelector('.language-dropdown-menu');
const languageText = document.querySelector('.language-choose .language');
const languageFlag = document.querySelector('.language-choose .language-flag');
const languageOptions = document.querySelectorAll('.language-option');

if (languageChoose) {
    // Click vào ngôn ngữ để mở/đóng menu
    languageChoose.addEventListener('click', function (e) {
        e.stopPropagation();
        languageMenu.classList.toggle('show');
        languageChoose.classList.toggle('active');
    });

    // Click chọn từng ngôn ngữ
    languageOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            const selectedFlag = this.getAttribute('data-flag');

            // Cập nhật text và icon hiển thị bên ngoài
            languageText.textContent = selectedLang;
            languageFlag.src = selectedFlag;

            // Xóa và gán lại class active cho option được chọn
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            // Đóng menu sau khi chọn
            languageMenu.classList.remove('show');
            languageChoose.classList.remove('active');
        });
    });

    // Click ra ngoài thì đóng dropdown
    window.addEventListener('click', function () {
        languageMenu.classList.remove('show');
        languageChoose.classList.remove('active');
    });
}

// FAQ đóng mở
document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
        var item = q.closest('.faq-item');
        item.classList.toggle('active');
    });
});


// Back to top
var backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
});
backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Swiper cho Lĩnh vực hoạt động
const fieldsSwiper = new Swiper('.fields-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.fields-next',
        prevEl: '.fields-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

// Swiper cho Dự án tiêu biểu
const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
});

// Khởi tạo Swiper cho logo đối tác
const partnersSwiper = new Swiper('.partners-swiper', {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
    }
});