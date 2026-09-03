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

// // FAQ đóng mở
// document.querySelectorAll('.faq-question').forEach(function (q) {
//     q.addEventListener('click', function () {
//         var item = q.closest('.faq-item');
//         item.classList.toggle('active');
//     });
// });


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

// ============ DỮ LIỆU THÔNG BÁO ============
const notificationsContainer = document.getElementById('notifications-container');

if (notificationsContainer) {
    fetch('content/notifications.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file notifications.json');
            }
            return response.json();
        })
        .then(notifications => {
            let htmlContent = '';

            notifications.forEach(item => {
                htmlContent += `
                    <div class="noti-item">
                        <span class="noti-item-date">${item.date}</span>
                        <span class="noti-item-text">${item.text}</span>
                    </div>
                `;
            });

            notificationsContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu thông báo:', error);
            notificationsContainer.innerHTML = '<p style="color: red;">Không thể tải thông báo.</p>';
        });
}

// ============ DỮ LIỆU TIN TỨC ============
const mainNewsWrapper = document.getElementById('main-news-wrapper');
const sideNewsWrapper = document.getElementById('side-news-wrapper');

if (mainNewsWrapper && sideNewsWrapper) {
    fetch('content/news.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file news.json');
            }
            return response.json();
        })
        .then(data => {
            const main = data.mainNews;
            mainNewsWrapper.innerHTML = `
                <img src="${main.image}" alt="">
                <div class="main-news-container">
                    <div class="main-news-content">
                        <span class="main-news-title">${main.title}</span>
                        <span class="main-news-date">${main.date}</span>
                    </div>
                    <span class="line-clamp-3 main-news-text">${main.description}</span>
                </div>
            `;

            let sideHtml = '';
            data.sideNews.forEach(item => {
                sideHtml += `
                    <div>
                        <img src="${item.image}" alt="">
                        <div>
                            <span class="line-clamp-3">${item.title}</span>
                            <span>${item.date}</span>
                        </div>
                    </div>
                `;
            });
            sideNewsWrapper.innerHTML = sideHtml;
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu tin tức:', error);
        });
}

// ============ DỮ LIỆU DANH MỤC ĐẦU TƯ ============
const categoriesContainer = document.getElementById('categories-container');

if (categoriesContainer) {
    fetch('content/categories.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file categories.json');
            }
            return response.json();
        })
        .then(categories => {
            let htmlContent = '';

            categories.forEach(item => {
                htmlContent += `
                    <div class="categories-item">
                        <div>
                            <img src="${item.image}" alt="">
                            <span class="line-clamp-2">${item.title}</span>
                        </div>
                        <a href="${item.link}">Xem ngay</a>
                    </div>
                `;
            });

            categoriesContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu danh mục đầu tư:', error);
        });
}

// ============ DỮ LIỆU LĨNH VỰC HOẠT ĐỘNG ============
const fieldsContainer = document.getElementById('fields-container');

if (fieldsContainer) {
    fetch('content/fields.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file fields.json');
            }
            return response.json();
        })
        .then(fields => {
            let htmlContent = '';

            fields.forEach(item => {
                htmlContent += `
                    <div class="swiper-slide field-item">
                        <img src="${item.image}" alt="">
                        <span class="field-title">${item.title}</span>
                        <span class="field-description">${item.description}</span>
                        <a href="${item.link}"></a>
                    </div>
                `;
            });

            fieldsContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu lĩnh vực hoạt động:', error);
        });
}

// ============ DỮ LIỆU DỰ ÁN TIÊU BIỂU ============
const projectsContainer = document.getElementById('projects-container');

if (projectsContainer) {
    fetch('content/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file projects.json');
            }
            return response.json();
        })
        .then(projects => {
            let htmlContent = '';

            projects.forEach(item => {
                htmlContent += `
                    <div class="swiper-slide project-item">
                        <img src="${item.image}" alt="" class="project-img">
                        <span class="project-title">${item.title}</span>
                        <div class="project-info">
                            <div>
                                <img src="assets/icons/location-2.svg" alt="">
                                <span class="project-location">Vị trí: </span>
                                <span>${item.location}</span>
                            </div>
                            <div>
                                <img src="assets/icons/clock.svg" alt="">
                                <span class="project-progress">Tiến độ: </span>
                                <span>${item.progress}</span>
                            </div>
                        </div>
                        <span>${item.description}</span>
                        <a href="${item.link}" class="project-button">KHÁM PHÁ DỰ ÁN</a>
                    </div>
                `;
            });

            projectsContainer.innerHTML = htmlContent;

            if (typeof projectsSwiper !== 'undefined') {
                projectsSwiper.update();
            }
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu dự án tiêu biểu:', error);
        });
}

// ============ DỮ LIỆU QUY TRÌNH VAY VỐN ============
const stepsContainer = document.getElementById('steps-container');

if (stepsContainer) {
    fetch('content/steps.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file steps.json');
            }
            return response.json();
        })
        .then(steps => {
            let htmlContent = '';

            steps.forEach(item => {
                htmlContent += `
                    <div class="steps-item">
                        <span class="steps-number">${item.step}</span>
                        <div class="steps-content">
                            <span class="steps-name">${item.title}</span>
                            <span class="steps-text">${item.description}</span>
                        </div>
                    </div>
                `;
            });

            stepsContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu quy trình vay vốn:', error);
        });
}

// ============ DỮ LIỆU FAQ ============
const faqContainer = document.getElementById('faq-container');

if (faqContainer) {
    fetch('content/faq.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file faq.json');
            }
            return response.json();
        })
        .then(faqs => {
            let htmlContent = '';

            faqs.forEach(item => {
                // Kiểm tra nếu active = true thì thêm class 'active' để mở sẵn từ đầu
                const activeClass = item.active ? 'active' : '';
                
                htmlContent += `
                    <div class="faq-item ${activeClass}">
                        <div class="faq-question">
                            <img src="assets/icons/question-mark.svg" alt="">
                            <span>${item.question}</span>
                            <img src="assets/icons/arrow-down-01.svg" alt="" class="faq-toggle-icon">
                        </div>
                        <div class="faq-answer">
                            <span>${item.answer}</span>
                        </div>
                    </div>
                `;
            });

            faqContainer.innerHTML = htmlContent;

            document.querySelectorAll('.faq-question').forEach(function (q) {
                q.addEventListener('click', function () {
                    var item = q.closest('.faq-item');
                    item.classList.toggle('active');
                });
            });
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu FAQ:', error);
        });
}

// ============ DỮ LIỆU VỀ CHÚNG TÔI ============
const aboutContent = document.getElementById('about-content');
const aboutImageWrapper = document.getElementById('about-image-wrapper');
const aboutStats = document.getElementById('about-stats');

if (aboutContent && aboutImageWrapper && aboutStats) {
    fetch('content/about.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải file about.json');
            }
            return response.json();
        })
        .then(data => {
            // nội dung văn bản
            aboutContent.innerHTML = `
                <div class="about-title">
                    <span class="about-title1">${data.subtitle}</span>
                    <span class="about-title2">${data.title}</span>
                </div>
                <span class="about-text">${data.description}</span>
                <a href="${data.buttonLink}" class="about-button">${data.buttonText}</a>
            `;

            // hình ảnh + nút play video
            aboutImageWrapper.innerHTML = `
                <img src="${data.image}" alt="${data.title}">
                <button type="button" class="about-play-btn" aria-label="Xem video giới thiệu" onclick="window.open('${data.videoUrl}', '_blank')">
                    <img src="assets/icons/play-button.svg" alt="">
                </button>
            `;

            // số thống kê
            let statsHtml = '';
            data.stats.forEach(item => {
                statsHtml += `
                    <div class="stats-item">
                        <span class="stats-number">${item.number}</span>
                        <span class="stats-title">${item.title}</span>
                        <hr class="stats-line">
                    </div>
                `;
            });
            aboutStats.innerHTML = statsHtml;
        })
        .catch(error => {
            console.error('Lỗi khi fetch dữ liệu Về chúng tôi:', error);
        });
}