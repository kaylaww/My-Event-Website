const mysong = document.getElementById("mysong");
const playbutton = document.getElementById("playbutton");

playbutton.onclick = function(){
    if(mysong.paused){
        mysong.play();
        playbutton.src = "media/pause.png";
    }else{
        mysong.pause();
        playbutton.src = "media/playblue.png";
    }
}
