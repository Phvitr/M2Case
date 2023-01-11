"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Admin = void 0;
var User_1 = require("./User");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(username, password, role) {
        return _super.call(this, username, password, role) || this;
    }
    Admin.prototype.getId = function () {
        return this._id;
    };
    Admin.prototype.setId = function (value) {
        this._id = value;
    };
    return Admin;
}(User_1.User));
exports.Admin = Admin;
