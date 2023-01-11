import {AdminManagementMenu} from "./AdminManagementMenu";
import {FlightManagementMenu} from "./FlightManagementMenu";
import {PassengerManager} from "../Controller/PassengerManager";

const readlineSync = require('readline-sync');
export class AdminMenu {
    private adminManagementMenu: AdminManagementMenu = new AdminManagementMenu();
    private flightManagementMenu: FlightManagementMenu = new FlightManagementMenu();

    private menu = `
    Welcome to the Admin Menu
    please select command number:
    1. Admin management
    2. Flight management
    3. View all passenger
    4. Back
    `
    selection(): void {
        while (true) {
            let command;
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
                    console.table(PassengerManager.passengerList);
                    break;
                }
                case 4: {
                    return;
                }
            }
        }
    }
}