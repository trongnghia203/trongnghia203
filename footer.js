< script > $(document).ready(function() {
    var wPlayer = Math.round($(".player").width());
    $(".player").css("height", wPlayer);
    var wSongTitle = wPlayer - 130;
    $(".song-title").css("width", wSongTitle + "px");
    $(window).resize(function() {
        var wPlayer = Math.round($(".player").width());
        $(".player").css("height", wPlayer);
        var wSongTitle = wPlayer - 120;
        $(".song-title").css("width", wSongTitle + "px");
    });
});
var player = document.getElementById('player__source'),
    playLoading = document.querySelectorAll('.player__loading span'),
    playPause = document.getElementById('playPause'),
    currentTime = document.getElementById('currentTime'),
    seek = document.getElementById('seek'),
    durationTime = document.getElementById('durationTime'),
    muted = document.getElementById('muted');
playPause.addEventListener('click', playPauseMusic, false);

function playPauseMusic() {
    if (player.paused) {
        player.play();
        // Kiểm tra thời gian hiện tại của bài nhạc
        timeInterval = setInterval(timeUpdateMusic, 100);
        // Thay đổi giá trị của seek
        seek.addEventListener('change', seekMusic, false);
        $("#playPause").css("background", "url('http://files.softicons.com/download/toolbar-icons/free-sound-icons-by-design-bolts/png/72x72/Pause.png') center no-repeat");
        $("#playPause").css("background-size", "60px 60px");
    } else {
        player.pause();
        $("#playPause").css("background", "url('http://www.slatecube.com/images/play-btn.png') center no-repeat");
        $("#playPause").css("background-size", "60px 60px");
    }
}

function timeUpdateMusic() {
    // Thời gian toàn bộ của bài nhạc    
    durationTime.innerHTML = ("0" + Math.round(player.duration / 60)).slice(-2) + ":" + ("0" + Math.round(player.duration % 59)).slice(-2);
    // Thời gian hiện tại của bài nhạc
    currentTime.innerHTML = ("0" + Math.round(player.currentTime / 60)).slice(-2) + ":" + ("0" + Math.round(player.currentTime % 59)).slice(-2);
    seek.max = player.duration;
    seek.value = player.currentTime;
}

function seekMusic() {
    player.currentTime = seek.value;
}
muted.addEventListener('click', mutedMusic, false);

function mutedMusic() {
    if (player.muted) {
        // Mở âm thanh
        player.muted = false;
        $("#muted").css("background", "url('http://icons.iconarchive.com/icons/icons8/ios7/256/Media-Controls-High-Volume-icon.png') center no-repeat");
        $("#muted").css("background-size", "20px 20px")
    } else {
        // Tắt âm thanh
        player.muted = true;
        $("#muted").css("background", "url('http://icons.iconarchive.com/icons/icons8/windows-8/256/Media-Controls-Mute-icon.png') center no-repeat");
        $("#muted").css("background-size", "20px 20px")
    }
} < /script>