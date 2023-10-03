document.addEventListener('DOMContentLoaded', function () {
    var showVideos = document.querySelectorAll('.show-video');
    var videoElements = document.querySelectorAll('.video');
    var btnShowVideos = document.querySelectorAll('.btn-play');
    var bgSliderS = document.querySelectorAll('.bg-black-slider');
    var btnCloseVideoS = document.querySelectorAll('.icon-close-video');
    var stopTimes = document.querySelectorAll('[data-bs-interval]');
    var btnStart = document.querySelector('.btn-start');
    var btnPause = document.querySelector('.btn-pause');
    var dataBsTargets = document.querySelectorAll('[data-bs-target]');
    // hiển thị video khi click vào .btn-play
    btnShowVideos.forEach(function (btnShowVideo, index) {
        btnShowVideo.addEventListener('click', function () {
            var showVideo = showVideos[index];
            var video = videoElements[index];
            var stopTime = stopTimes[index];
            var dataBsTarget = dataBsTargets[index];
            if (showVideo.style.display === 'none' || showVideo.style.display === '') {
                showVideo.style.display = 'block';
                bgSliderS[index].style.background = '#000';
                bgSliderS[index].style.opacity = '0.6';
                stopTime.setAttribute('data-bs-interval', 'false');
                
            } else {
                showVideo.style.display = 'none';
            }
        });
    });
    function closeVideo(index) {
        var stopTime = stopTimes[index];
        var showVideo = showVideos[index];
        if (showVideo.style.display === 'block') {
            showVideo.style.display = 'none';
            bgSliderS[index].style.background = 'transparent';
            bgSliderS[index].style.opacity = '1';
            stopTime.setAttribute('data-bs-interval', '10000'); 
        }
    }

    btnCloseVideoS.forEach(function (btnCloseVideo, index) {
        btnCloseVideo.addEventListener('click', function () {
            closeVideo(index);
            
        });
    });

    btnStart.addEventListener('click', function () {
        btnStart.style.display = 'none';
        btnPause.style.display = 'block';
        stopTimes.forEach(function (stopTime) {
            stopTime.setAttribute('data-bs-interval', '10000'); // tốc độ đổi ảnh sau 10s
        });
    });

    btnPause.addEventListener('click', function () {
        btnStart.style.display = 'block';
        btnPause.style.display = 'none';
        stopTimes.forEach(function (stopTime) {
            stopTime.setAttribute('data-bs-interval', 'false'); // dừng việc hoán đổi ảnh
        });
    });
});

