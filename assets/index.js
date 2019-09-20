import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video")
const player = new MediaPlayer({
   el: video, 
   plugins: [new AutoPlay(), new AutoPause()],
   });

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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}