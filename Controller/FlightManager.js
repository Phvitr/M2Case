"use strict";
exports.__esModule = true;
exports.FlightManager = void 0;
var Flight_1 = require("../Model/Flight");
var FlightManager = /** @class */ (function () {
    function FlightManager() {
    }
    FlightManager.prototype.showAllFlight = function () {
        return FlightManager.flightList;
    };
    FlightManager.prototype.getFlightById = function (flightId) {
        for (var i = 0; i < FlightManager.flightList.length; i++) {
            if (FlightManager.flightList[i].getFlightId() === flightId) {
                return i;
            }
        }
        return -1;
    };
    FlightManager.prototype.addFlight = function (flightId, flightName) {
        var flight = new Flight_1.Flight(flightId, flightName);
        FlightManager.flightList.push(flight);
    };
    FlightManager.prototype.updateFlight = function (flightId, newObject) {
        var index = this.getFlightById(flightId);
        if (index === -1) {
            return "Flight not found";
        }
        FlightManager.flightList.splice(index, 1, newObject);
    };
    FlightManager.prototype.deleteFlight = function (flight) {
        var index = this.getFlightById(flight);
        if (index === -1) {
            return "Flight not found";
        }
        FlightManager.flightList.splice(index, 1);
    };
    FlightManager.flightList = [];
    return FlightManager;
}());
exports.FlightManager = FlightManager;
