let isPlaying = false;

document.addEventListener('keydown', e => {
    if (isPlaying) {
        e.preventDefault();
    }
})