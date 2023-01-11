"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightId, flightName) {
        this._flightId = flightId;
        this._flightName = flightName;
    }
    Flight.prototype.getFlightId = function () {
        return this._flightId;
    };
    Flight.prototype.setFlightId = function (value) {
        this._flightId = value;
    };
    Flight.prototype.getFlightName = function () {
        return this._flightName;
    };
    Flight.prototype.setFlightName = function (value) {
        this._flightName = value;
    };
    return Flight;
}());
exports.Flight = Flight;
