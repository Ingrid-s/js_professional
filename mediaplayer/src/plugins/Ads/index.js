"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ads_1 = __importDefault(require("./Ads"));
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads_1.default.getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAd();
        this.currentAd = ad;
        //console.log(this.currentAd);
        this.adsContainer.innerHTML = "\n    <div class=\"ads\"> \n      <aclass=\"ads__link\"href=\"" + this.currentAd.url + "\"target=\"_blank\">\n      <imgclass=\"ads__img\"src=\"" + this.currentAd.imageUrl + "\" />\n      <divclass=\"ads__info\">\n        <h5class=\"ads__title\">" + this.currentAd.title + "</h5>\n        <pclass=\"ads__body\">" + this.currentAd.body + "</p>\n      </div>\n      </a>\n    </div>";
        setTimeout(function () {
            _this.currentAd = null;
            _this.adsContainer.innerHTML = '';
        }, 10000);
    };
    return AdsPlugin;
}());
exports.default = AdsPlugin;
