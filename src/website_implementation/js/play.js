const mysong = document.getElementById("mysong");
const playbutton = document.getElementById("playbutton");

// Add a click event listener to the 'playbutton'
playbutton.onclick = function(){
    // Check if the 'mysong' is paused
    if(mysong.paused){
        mysong.play();
        // Change the 'playbutton' image source to a pause icon
        playbutton.src = "media/pause.png";
    }else{
        // If it is playing, pause the song
        mysong.pause();
        // Change the 'playbutton' image source to a play icon
        playbutton.src = "media/playblue.png";
    }
}
