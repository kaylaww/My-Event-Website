// global constant variables
const audioFileInputLabel = document.getElementById('audio-file-input-label');
const audioFileInput = document.getElementById('audio-file-input');
// const myInput = document.querySelector("#date_time");
// const fp = flatpickr(myInput, {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// });
const my_website_code = "kayla84";
const baseURLMusic = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/"
const postMusicAudioMethod = 'POST'

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
        eventForm.reset();
        audioFileInputLabel.textContent = "Add a song"
        alert(`Your eventYour album "${data.song_title}" submitted successfully!`);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        alert("Error submitting album. Please try again.")
    });
};

// envent listeners
audioFileInputLabel.addEventListener('click', triggerFileInput);
audioFileInput.addEventListener('change', handleFileChange);
eventForm.addEventListener("submit", handleFormSubmit);