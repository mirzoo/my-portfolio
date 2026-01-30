/**
 * Инициализация Lottie-анимации в Case 3 (Дизайн система • pro.finansy).
 * Требует подключённую библиотеку lottie (bodymovin).
 */
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('lottie-case3');
    if (container && typeof lottie !== 'undefined') {
        lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/designsystemProfinansy.json'
        });
    }
});
