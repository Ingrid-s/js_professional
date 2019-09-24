"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relavive';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        /*const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };*/
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    return MediaPlayer;
}());
/*MediaPlayer.prototype.toggleMute = function (){
    
    if(this.media.mute){
        this.unmute();
        console.log('si llega')
    } else {
        this.mute();
    }
};*/
exports.default = MediaPlayer;
