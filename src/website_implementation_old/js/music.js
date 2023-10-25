const audio = document.getElementById('audio');
const playlist = document.querySelectorAll('.playlist a');

// Play selected song from the playlist
playlist.forEach((song) => {
    song.addEventListener('click', (e) => {
        e.preventDefault();
        const songUrl = e.target.href;
        audio.src = songUrl;
        audio.play();
        updateMusicInfo(e.target.innerText);
    });
});

// Update music information (song title and artist)
function updateMusicInfo(title) {
    const musicInfo = document.querySelector('.music-info');
    musicInfo.querySelector('h2').innerText = title;
    // You can also update the artist name here if available.
}

// Update music information for the initial song
updateMusicInfo(playlist[0].innerText);
