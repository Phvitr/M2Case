"use strict";
exports.__esModule = true;
exports.FlightManagementMenu = void 0;
var FlightManager_1 = require("../Controller/FlightManager");
var Flight_1 = require("../Model/Flight");
var readlineSync = require('readline-sync');
var FlightManagementMenu = /** @class */ (function () {
    function FlightManagementMenu() {
        this.flightManager = new FlightManager_1.FlightManager();
        this.menu = "\n    Welcome to the Flight Management Menu\n    please select a command:\n    1. View all flights\n    2. Search for a flight\n    3. Add a flight\n    4. Edit a flight\n    5. Cancel a flight\n    6. Back\n    ";
    }
    FlightManagementMenu.prototype.selection = function () {
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
                    var flightName = +readlineSync.question("Flight id: ");
                    var index = this.flightManager.getFlightById(flightName);
                    console.table(FlightManager_1.FlightManager.flightList[index]);
                    break;
                }
                case 3: {
                    var flightID = +readlineSync.question("Flight id: ");
                    var flightName = readlineSync.question("Flight name: ");
                    this.flightManager.addFlight(flightID, flightName);
                    break;
                }
                case 4: {
                    var flightId = +readlineSync.question("Flight id: ");
                    var NewFlightId = +readlineSync.question("New flight Id: ");
                    var newFlightName = readlineSync.question("New flight name: ");
                    var newFlight = new Flight_1.Flight(NewFlightId, newFlightName);
                    this.flightManager.updateFlight(flightId, newFlight);
                    break;
                }
                case 5: {
                    var cancelFlight = +readlineSync.question("Flight id: ");
                    this.flightManager.deleteFlight(cancelFlight);
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    };
    return FlightManagementMenu;
}());
exports.FlightManagementMenu = FlightManagementMenu;
