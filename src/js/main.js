const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const overlay = document.querySelector(".overlay");

playBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
    video.play();
});

video.addEventListener("ended", () => {
    overlay.classList.remove("hide");
    video.currentTime = 0;
});
