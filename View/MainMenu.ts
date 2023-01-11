import {AdminMenu} from "./AdminMenu";
import {AdminManager} from "../Controller/AdminManager";
import {PassengerMenu} from "./PassengerMenu";
import {PassengerManager} from "../Controller/PassengerManager";

const readlineSync = require('readline-sync');
export class MainMenu {
    private adminMenu: AdminMenu = new AdminMenu();
    private passengerMenu: PassengerMenu = new PassengerMenu();
    private adminManager: AdminManager = new AdminManager();
    private passengerManager: PassengerManager = new PassengerManager();
    private menu: string = `
    Welcome to de_airport
    Please select your command:
    1. Login
    2. Register as a passenger
    3. Exit
    `
    public selection(): void {
        while (true) {
            let command;
            do {
                console.log(this.menu);
                command = +readlineSync.question("Your command: ");
                if (command < 1 || command > 3) {
                    console.log("Invalid command");
                }
            } while (command < 1 || command > 3);
            switch (command) {
                case 1: {
                    let username = readlineSync.question("Username: ");
                    let password = readlineSync.question("Password: ");
                    let status = this.adminManager.adminLogin(username, password);
                    if (status == -1) {
                        console.log("wrong username or password");
                    } else if (status == 0) {
                        this.adminMenu.selection();
                    }
                    break;
                }
                case 2: {
                    let username = readlineSync.question("Username: ");
                    let password = readlineSync.question("Password: ");
                    let role = 1;
                    this.passengerManager.registerPassenger(username, password, role);
                    this.passengerMenu.selection();
                    break;
                }
                case 3:
                    return;
            }
        }
    }
}