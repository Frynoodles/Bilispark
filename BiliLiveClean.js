
(function() {
    'use strict';
    // 等待页面加载完成
    window.onload = function() {
        var timer = setInterval(function() {
            var bottomBar = document.getElementById("web-player__bottom-bar__container");
            if (bottomBar) {
                clearInterval(timer);
                bottomBar.remove();
                var videos = document.getElementsByTagName("video");
                for (var i = 0; i < videos.length; i++) {
                    videos[i].style.height = "100%";
                }
            }
        }, 500); // 定时器间隔为0.5s，单位是毫秒
    }
    // Your code here...
})();
