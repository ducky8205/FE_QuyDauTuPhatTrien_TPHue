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