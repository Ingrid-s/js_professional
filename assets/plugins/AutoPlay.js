function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  player.mute();
  player.togglePlay();
};

export default AutoPlay;