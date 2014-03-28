$(document).ready(function() {
    ytplayer = document.getElementById("ytplayer");
    $("#ytplayer").bind("click", "callback");
    //ytplayer.addEventListener("onStateChange", "thisIsaTest");
    alert("ytplayer = " + ytplayer);
});

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var done = false;
function onPlayerStateChange(event) {
    alert("in onplayerstatechange");
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

//}

function callback(newState) {
    alert("in callback");
//    alert("Player's new state: " + newState);
}


