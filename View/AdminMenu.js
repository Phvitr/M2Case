"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var AdminManagementMenu_1 = require("./AdminManagementMenu");
var FlightManagementMenu_1 = require("./FlightManagementMenu");
var PassengerManager_1 = require("../Controller/PassengerManager");
var readlineSync = require('readline-sync');
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.adminManagementMenu = new AdminManagementMenu_1.AdminManagementMenu();
        this.flightManagementMenu = new FlightManagementMenu_1.FlightManagementMenu();
        this.menu = "\n    Welcome to the Admin Menu\n    please select command number:\n    1. Admin management\n    2. Flight management\n    3. View all passenger\n    4. Back\n    ";
    }
    AdminMenu.prototype.selection = function () {
        while (true) {
            var command = void 0;
            do {
                console.log(this.menu);
                command = +readlineSync.question("Your command: ");
                if (command < 1 || command > 4) {
                    console.log("Invalid command");
                }
            } while (command < 1 || command > 4);
            switch (command) {
                case 1: {
                    this.adminManagementMenu.selection();
                    break;
                }
                case 2: {
                    this.flightManagementMenu.selection();
                    break;
                }
                case 3: {
                    console.table(PassengerManager_1.PassengerManager.passengerList);
                    break;
                }
                case 4: {
                    return;
                }
            }
        }
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
