let $audio = $('audio')[0],
    $playBtn = $('.playBtn');

$playBtn.on('click', function() {
    var $this = $(this);
    if ($this.hasClass('move')) {
        //让音频停止 清掉定时器
        $audio.pause();
        $this.removeClass('move');
    } else {
        //$audio.play();
        $this.addClass('move');
    }
});

//$audio.play();
$audio.addEventListener('canplay', function() {
    //音频可以播放的时候要执行的动作
    //let endT = computedTime($audio.duration);
    //$endTime.html(endT);

}, false);