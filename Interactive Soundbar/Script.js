const btnsxyz = Array.from(document.querySelectorAll(".btn"));

function stopSounds() {
    btnsxyz.forEach((btn, idx) => {
        const sound = document.getElementById(btnsxyz[idx].innerText)
        sound.pause();
        sound.currentTime = 0
    })
}

function playSound(btn) {
    btn.addEventListener("click", function () {
        stopSounds();
        document.getElementById(btn.innerText).play();
    });
}

btnsxyz.forEach((btn) => playSound(btn));

