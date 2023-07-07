window.addEventListener("load", function () {
  const videoPlayer = document.getElementById("video-player");
  const videoSources = [
    "./videos/video1.mp4",
    "./videos/video2.mp4",
    "./videos/video3.mp4",
    "./videos/video4.mp4",
    "./videos/video5.mp4",
    "./videos/video6.mp4",
    "./videos/video7.mp4",
  ]; // Add the paths of videos
  let currentIndex = 0;

  function playNextVideo() {
    currentIndex = (currentIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.play();
  }

  videoPlayer.addEventListener("ended", playNextVideo);
});

var prevScrollPos = window.scrollY;
var header = document.getElementById('sticky-header');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    // Scrolling upward
    header.classList.remove('hidden');
  } else {
    // Scrolling downward
    header.classList.add('hidden');
  }
  
  prevScrollPos = currentScrollPos;
});

function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
