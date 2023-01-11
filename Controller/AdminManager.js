"use strict";
exports.__esModule = true;
exports.AdminManager = void 0;
var Admin_1 = require("../Model/Admin");
var readlineSync = require("readline-sync");
var AdminManager = /** @class */ (function () {
    function AdminManager() {
    }
    AdminManager.prototype.registerAdmin = function () {
        var flag = true;
        var newAdminName;
        var newAdminPassword;
        while (flag) {
            newAdminName = readlineSync.question("Username: ");
            if (!newAdminName) {
                console.log("Username cannot be empty");
            }
            else {
                flag = false;
            }
        }
        while (!flag) {
            newAdminPassword = readlineSync.question("Password: ");
            if (!this.validatePassword(newAdminPassword)) {
                console.log("Password must be at least 6 characters and it has to contain lower characters or Upper characters number!");
            }
            else {
                flag = true;
            }
        }
        AdminManager.adminList.push(new Admin_1.Admin(newAdminName, newAdminPassword, 0));
    };
    AdminManager.prototype.adminLogin = function (username, password) {
        var index = -1;
        for (var _i = 0, _a = AdminManager.adminList; _i < _a.length; _i++) {
            var admin = _a[_i];
            if (admin.getUsername() === username && admin.getPassword() === password) {
                index = admin.getRole();
                return index;
            }
        }
    };
    AdminManager.prototype.getAdmin = function (username) {
        for (var _i = 0, _a = AdminManager.adminList; _i < _a.length; _i++) {
            var admin = _a[_i];
            if (admin.getUsername() === username) {
                return admin;
            }
        }
        return undefined;
    };
    AdminManager.prototype.showAllAdmin = function () {
        return AdminManager.adminList;
    };
    AdminManager.prototype.editAdmin = function (name, newObject) {
        var index = this.findByName(name);
        if (index === -1) {
            return "id does not exist";
        }
        AdminManager.adminList.splice(index, 1, newObject);
    };
    // public findById(id: number) {
    //     for (let i = 0; i < AdminManager.adminList.length; i++) {
    //         if (AdminManager.adminList[i].getId() === id) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    AdminManager.prototype.findByName = function (name) {
        for (var i = 0; i < AdminManager.adminList.length; i++) {
            if (AdminManager.adminList[i].getUsername() === name) {
                return i;
            }
        }
        return -1;
    };
    AdminManager.prototype.deleteAdmin = function (name) {
        var index = this.findByName(name);
        if (index != -1) {
            AdminManager.adminList.splice(index, 1);
        }
        else
            return "This admin does not exist";
    };
    AdminManager.prototype.validatePassword = function (password) {
        var regex = /^[A-Za-z0-9]{6,}$/;
        return regex.test(password);
    };
    AdminManager.adminList = [new Admin_1.Admin("admin0", "123", 0)];
    return AdminManager;
}());
exports.AdminManager = AdminManager;
