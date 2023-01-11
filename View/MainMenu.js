"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var AdminMenu_1 = require("./AdminMenu");
var AdminManager_1 = require("../Controller/AdminManager");
var PassengerMenu_1 = require("./PassengerMenu");
var PassengerManager_1 = require("../Controller/PassengerManager");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.adminMenu = new AdminMenu_1.AdminMenu();
        this.passengerMenu = new PassengerMenu_1.PassengerMenu();
        this.adminManager = new AdminManager_1.AdminManager();
        this.passengerManager = new PassengerManager_1.PassengerManager();
        this.menu = "\n    Welcome to de_airport\n    Please select your command:\n    1. Login\n    2. Register as a passenger\n    3. Exit\n    ";
    }
    MainMenu.prototype.selection = function () {
        while (true) {
            var command = void 0;
            do {
                console.log(this.menu);
                command = +readlineSync.question("Your command: ");
                if (command < 1 || command > 3) {
                    console.log("Invalid command");
                }
            } while (command < 1 || command > 3);
            switch (command) {
                case 1: {
                    var username = readlineSync.question("Username: ");
                    var password = readlineSync.question("Password: ");
                    var status_1 = this.adminManager.adminLogin(username, password);
                    if (status_1 == -1) {
                        console.log("wrong username or password");
                    }
                    else if (status_1 == 0) {
                        this.adminMenu.selection();
                    }
                    break;
                }
                case 2: {
                    var username = readlineSync.question("Username: ");
                    var password = readlineSync.question("Password: ");
                    var role = 1;
                    this.passengerManager.registerPassenger(username, password, role);
                    this.passengerMenu.selection();
                    break;
                }
                case 3:
                    return;
            }
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
