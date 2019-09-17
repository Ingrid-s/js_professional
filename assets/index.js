import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video")
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector('#playBtn')
button.onclick = () => player.togglePlay();

const muteBtn = document.querySelector('#muteBtn')
muteBtn.onclick = () => {
    if (player.media.muted) {
        player.unmute();
      } else {
        player.mute();
      }
}