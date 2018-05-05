//audio
const boom = new Audio('./sounds/boom.wav');
const clap = new Audio('./sounds/clap.wav');
const hihat = new Audio('./sounds/hihat.wav');
const kick = new Audio('./sounds/kick.wav');
const openhat = new Audio('./sounds/openhat.wav');
const ride = new Audio('./sounds/ride.wav');
const snare = new Audio('./sounds/snare.wav');
const tink = new Audio('./sounds/tink.wav');
const tom = new Audio('./sounds/tom.wav');


document.getElementById('clap').addEventListener('click', () => {
    clap.play();
});
document.getElementById('hihat').addEventListener('click', () => {
    hihat.play();
});
document.getElementById('kick').addEventListener('click', () => {
    kick.play();
});
document.getElementById('openhat').addEventListener('click', () => {
    openhat.play();
});
document.getElementById('boom').addEventListener('click', () => {
    boom.play();
});
document.getElementById('ride').addEventListener('click', () => {
    ride.play();
});
document.getElementById('snare').addEventListener('click', () => {
    snare.play();
});
document.getElementById('tom').addEventListener('click', () => {
    tom.play();
});
document.getElementById('tink').addEventListener('click', () => {
    tink.play();
});
document.onkeydown = (e) => {
    if (e.which == 81 ) {
        clap.play();
    }
    if (e.which == 87 ) {
        hihat.play();
    }
    if (e.which == 69 ) {
        kick.play();
    }
    if (e.which == 82 ) {
        openhat.play();
    }
    if (e.which == 65 ) {
        boom.play();
    }
    if (e.which == 83 ) {
        ride.play();
    }
    if (e.which == 68 ) {
        snare.play();
    }
    if (e.which == 70 ) {
        tom.play();
    }
    if (e.which == 32 ) {
        tink.play();
    }
}