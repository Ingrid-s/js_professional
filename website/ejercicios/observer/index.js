"use strict";
var BitcoinPrice = /** @class */ (function () {
    function BitcoinPrice() {
        var _this = this;
        this.observers = [];
        var el = document.querySelector('#value');
        el.addEventListener('input', function () {
            _this.notify(el.value);
        });
    }
    BitcoinPrice.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    BitcoinPrice.prototype.unsubscribe = function (observer) {
        var index = this.observers.findIndex(function (obs) {
            return obs === observer;
        });
        this.observers.splice(index, 1);
    };
    BitcoinPrice.prototype.notify = function (data) {
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return BitcoinPrice;
}());
var PriceDisplay = /** @class */ (function () {
    function PriceDisplay() {
        this.el = document.querySelector('#price');
    }
    PriceDisplay.prototype.update = function (data) {
        this.el.innerText = data;
    };
    return PriceDisplay;
}());
var value = new BitcoinPrice();
var display = new PriceDisplay();
value.subscribe(display);
setTimeout(function () { return value.unsubscribe(display); }, 5000);
