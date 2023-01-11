"use strict";
exports.__esModule = true;
exports.PassengerMenu = void 0;
var FlightManager_1 = require("../Controller/FlightManager");
var Passenger_1 = require("../Model/Passenger");
var PassengerManager_1 = require("../Controller/PassengerManager");
var readlineSync = require('readline-sync');
var PassengerMenu = /** @class */ (function () {
    function PassengerMenu() {
        this.flightManager = new FlightManager_1.FlightManager();
        this.passengerManager = new PassengerManager_1.PassengerManager();
        this.menu = "\n     Passenger Menu\n     Please select your command: \n     1. View all available flights\n     2. Search for a flight\n     3. Book a flight\n     4. Show booking information\n     5. Edit your information\n     6. Exit\n     ";
    }
    PassengerMenu.prototype.selection = function () {
        while (true) {
            var command = void 0;
            do {
                console.log(this.menu);
                command = +readlineSync.question("Your command: ");
                if (command < 1 || command > 6) {
                    console.log("Invalid command");
                }
            } while (command < 1 || command > 6);
            switch (command) {
                case 1: {
                    console.table(this.flightManager.showAllFlight());
                    break;
                }
                case 2: {
                    var flightName = readlineSync.question("Flight name: ");
                    this.flightManager.getFlightById(flightName);
                    break;
                }
                case 3: {
                    var flightId = readlineSync.question("Flight id: ");
                    this.passengerManager.bookFlight(flightId);
                    console.log("Booked successfully");
                    break;
                }
                case 4: {
                    console.log("Your booking information :");
                    console.table(this.passengerManager.showBooking());
                    break;
                }
                case 5: {
                    var passengerId = +readlineSync.question("id: ");
                    var NewId = readlineSync.question("New Id: ");
                    var newPassengerName = readlineSync.question("New username: ");
                    var newPassengerPassword = readlineSync.question("New password: ");
                    var newPassenger = new Passenger_1.Passenger(NewId, newPassengerName, newPassengerPassword);
                    this.passengerManager.editPassenger(passengerId, newPassenger);
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    };
    return PassengerMenu;
}());
exports.PassengerMenu = PassengerMenu;
