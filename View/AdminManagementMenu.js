"use strict";
exports.__esModule = true;
exports.AdminManagementMenu = void 0;
var AdminManager_1 = require("../Controller/AdminManager");
var Admin_1 = require("../Model/Admin");
var readlineSync = require('readline-sync');
var AdminManagementMenu = /** @class */ (function () {
    function AdminManagementMenu() {
        this.adminManager = new AdminManager_1.AdminManager();
        this.menu = "\n    Welcome to Admin Management Menu\n    Please select a command:\n    1. View all admins\n    2. Search for an admin\n    3. Register a new admin\n    4. Edit an admin\n    5. Delete an admin\n    6. Back\n    ";
    }
    AdminManagementMenu.prototype.selection = function () {
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
                    console.table(this.adminManager.showAllAdmin());
                    break;
                }
                case 2: {
                    var adminName = readlineSync.question("Username: ");
                    this.adminManager.getAdmin(adminName);
                    break;
                }
                case 3: {
                    this.adminManager.registerAdmin();
                    break;
                }
                case 4: {
                    var adminName = readlineSync.question("Name: ");
                    var adminRole = 0;
                    var newAdminName = readlineSync.question("New username: ");
                    var newAdminPassword = readlineSync.question("New password: ");
                    var newAdmin = new Admin_1.Admin(newAdminName, newAdminPassword, adminRole);
                    this.adminManager.editAdmin(adminName, newAdmin);
                    break;
                }
                case 5: {
                    var deleteAdmin = readlineSync.question("Name: ");
                    this.adminManager.deleteAdmin(deleteAdmin);
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    };
    return AdminManagementMenu;
}());
exports.AdminManagementMenu = AdminManagementMenu;
