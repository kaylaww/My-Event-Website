// global constant variables
const audioFileInputLabel = document.getElementById('audio-file-input-label');
const audioFileInput = document.getElementById('audio-file-input');
const my_website_code = "kayla84";
const baseURLMusic = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/"
const postMusicAudioMethod = 'POST';
const musicContainer = document.getElementById('albums-container');

// constant functions
const triggerFileInput = () => {
    audioFileInput.click();
};

const handleFileChange = () => {
    let fileName = audioFileInput.files[0].name;

    if (fileName.length > 20) {
        fileName = fileName.substring(0, 17) + '...';
    }

    audioFileInputLabel.textContent = fileName;
};

const handleFormSubmit = music => {
    music.preventDefault();

    let formData = new FormData(music.target);
    formData.append("website_code", my_website_code);

    const requestOptions = {
        method: postMusicAudioMethod,
        body: formData,
        redirect: 'follow'
    }

    fetch(baseURLMusic, requestOptions)
    .then(response => response.json().then(data => {
        if (!response.ok) {
            console.log("Server response:", data);
            throw new Error("Network response was not ok");
        }
        return data;
    }))
    .then(data => {
        console.log(data.song_title);
        audioFileInputLabel.textContent = "Add a song"
        alert(`Your album "${data.song_title}" submitted successfully!`);
        eventForm.reset();
        return data;
    })
    .then(data => {
        getMusic();
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        alert("Error submitting album. Please try again.")
    });
};

// fetching events from Music API
const getMusic = () => {
    const queryParmas = {
        website_code: my_website_code,
    }
    const queryString = new URLSearchParams(queryParmas).toString();
    const urlWithParams = baseURLMusic+"?"+queryString;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    
    fetch(urlWithParams, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(musics => {console.log(musics);
        while (musicContainer.firstChild) {
            musicContainer.removeChild(musicContainer.firstChild);
        }
        musics.forEach(music => {
            const musicTemplate = `
                <article class="col-12 col-md-12 col-lg-6">
                    <div class="card" role="group" aria-labelledby="cards${music.id}-title" aria-describedby="card${music.id}-desc">
                        <h2 class="card-header p-2" id="card${music. id}-title">${music.name}</h2> 
                        <p class="card-body-text p-2">${music.description}</p>
                        <p class="card-body-text px-2"><strong>Song title:</strong> ${music.song_title}</p>
                        <p class="card-body-text px-2"><strong>Genre:</strong> ${music.genre}</p>
                        <p class="card-body-text px-2"><strong>Description:</strong> ${music.description}</p>
                        <p class="card-body-text px-2"><strong>Message:</strong> ${music.message}</p>
                    </div> 
                </article>
            `;
            musicContainer.innerHTML += musicTemplate;
        })
    })
    .catch(error => {
        console.error("Error processing album:", error.message);
        alert("There was a problem loading album. Please refresh the page to try again.");
    });
}

// envent listeners
audioFileInputLabel.addEventListener('click', triggerFileInput);
audioFileInput.addEventListener('change', handleFileChange);
eventForm.addEventListener("submit", handleFormSubmit);

// page setip on first load
getMusic();