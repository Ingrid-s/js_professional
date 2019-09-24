import MediaPlayer from 'mediaplayerplatzi/';
import AutoPlay from 'mediaplayerplatzi/lib./plugins/AutoPlay';
import AutoPause from 'mediaplayerplatzi/lib/plugins/AutoPause';
import Ads from 'mediaplayerplatzi/lib/plugin/Ads';

const video = document.querySelector("video")
const player = new MediaPlayer({
   el: video, 
   plugins: [new AutoPlay(), new AutoPause(), new Ads()],
   });

const button: HTMLElement = document.querySelector('#playBtn')
button.onclick = () => player.togglePlay();

const muteBtn: HTMLElement = document.querySelector('#muteBtn')
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