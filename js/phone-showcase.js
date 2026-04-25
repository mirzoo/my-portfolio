document.addEventListener('DOMContentLoaded', function () {
    var showcases = document.querySelectorAll('.phone-showcase__phone-content--video, .phone-showcase--full-video');

    showcases.forEach(function (showcase) {
        var video = showcase.querySelector('video');

        if (!video) {
            return;
        }

        function markReady() {
            showcase.dataset.ready = 'true';
        }

        if (video.readyState >= 2) {
            markReady();
            return;
        }

        video.addEventListener('loadeddata', markReady, { once: true });
        video.addEventListener('canplay', markReady, { once: true });
    });
});
