let progress = document.querySelector("#progress")
let song = document.querySelector("#song")
let ctrlIcon = document.querySelector("#ctrlIcon")

song.onloadedmetadata = function () {
    progress.max = song.duration
    progress.value = song.currentTime
}

function playPause() {
    if (song.paused) {
        song.play()
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
    } else {
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
}

let updateProgressInterval;

progress.oninput = function () {
    clearInterval(updateProgressInterval); // Clear any previous interval
    song.currentTime = progress.value;
    updateProgressInterval = setInterval(function () {
        progress.value = song.currentTime;
    }, 500);
}

song.onended = function () {
    clearInterval(updateProgressInterval); // Clear the interval when the song ends
}

