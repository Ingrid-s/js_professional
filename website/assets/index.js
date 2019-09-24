"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MediaPlayer_1 = __importDefault(require("./MediaPlayer"));
var AutoPlay_1 = __importDefault(require("./plugins/AutoPlay"));
var AutoPause_1 = __importDefault(require("./plugins/AutoPause"));
var Ads_1 = __importDefault(require("./plugins/Ads"));
var video = document.querySelector("video");
var player = new MediaPlayer_1.default({
    el: video,
    plugins: [new AutoPlay_1.default(), new AutoPause_1.default(), new Ads_1.default()],
});
var button = document.querySelector('#playBtn');
button.onclick = function () { return player.togglePlay(); };
var muteBtn = document.querySelector('#muteBtn');
muteBtn.onclick = function () {
    if (player.media.muted) {
        player.unmute();
    }
    else {
        player.mute();
    }
};
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function (error) {
        console.log(error.message);
    });
}
