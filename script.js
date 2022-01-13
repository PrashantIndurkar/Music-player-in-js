const musicContainer = document.getElementById("music_container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress_container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// songs title
const songs = ["hey", "summer", "ukulele"];

// Keep Track of Song
let songIndex = [2];

// initially load song details into dom
loadSong(songs[songIndex]);

// update song detail
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}
