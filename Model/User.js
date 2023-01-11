"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, password, role) {
        this._username = username;
        this._password = password;
        this._role = role;
    }
    User.prototype.getUsername = function () {
        return this._username;
    };
    User.prototype.setUsername = function (value) {
        this._username = value;
    };
    User.prototype.getPassword = function () {
        return this._password;
    };
    User.prototype.setPassword = function (value) {
        this._password = value;
    };
    User.prototype.getRole = function () {
        return this._role;
    };
    User.prototype.setRole = function (value) {
        this._role = value;
    };
    return User;
}());
exports.User = User;
