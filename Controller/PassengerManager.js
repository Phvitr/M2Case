"use strict";
exports.__esModule = true;
exports.PassengerManager = void 0;
var Passenger_1 = require("../Model/Passenger");
var FlightManager_1 = require("./FlightManager");
var PassengerManager = /** @class */ (function () {
    function PassengerManager() {
    }
    PassengerManager.prototype.bookFlight = function (id) {
        for (var i = 0; i < FlightManager_1.FlightManager.flightList.length; i++) {
            if (FlightManager_1.FlightManager.flightList[i].getFlightId() == id) {
                PassengerManager.passengerFlightList.push(FlightManager_1.FlightManager.flightList[i]);
            }
        }
    };
    PassengerManager.prototype.showBooking = function () {
        return PassengerManager.passengerFlightList;
    };
    PassengerManager.prototype.addPassenger = function (passenger) {
        PassengerManager.passengerList.push(passenger);
    };
    PassengerManager.prototype.registerPassenger = function (name, password, role) {
        if (role === void 0) { role = 1; }
        var passenger = new Passenger_1.Passenger(name, password, role);
        this.addPassenger(passenger);
    };
    PassengerManager.prototype.findById = function (id) {
        for (var i = 0; i < PassengerManager.passengerList.length; i++) {
            if (PassengerManager.passengerList[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    PassengerManager.prototype.editPassenger = function (id, newObject) {
        var index = this.findById(id);
        if (index === -1) {
            return "id does not exist";
        }
        PassengerManager.passengerList.splice(index, 1, newObject);
    };
    PassengerManager.passengerList = [];
    PassengerManager.passengerFlightList = [];
    return PassengerManager;
}());
exports.PassengerManager = PassengerManager;
