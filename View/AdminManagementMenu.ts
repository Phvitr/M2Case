import {AdminManager} from "../Controller/AdminManager";
import {Admin} from "../Model/Admin";

const readlineSync = require('readline-sync');

export class AdminManagementMenu {
    private adminManager: AdminManager = new AdminManager();
    private menu: string = `
    Welcome to Admin Management Menu
    Please select a command:
    1. View all admins
    2. Search for an admin
    3. Register a new admin
    4. Edit an admin
    5. Delete an admin
    6. Back
    `
    public selection(): void {
        while (true) {
            let command;
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
                    let adminName = readlineSync.question("Username: ");
                    this.adminManager.getAdmin(adminName);
                    break;
                }
                case 3: {
                    this.adminManager.registerAdmin();
                    break;
                }
                case 4: {
                    let adminName = readlineSync.question("Name: ");
                    let adminRole = 0;
                    let newAdminName = readlineSync.question("New username: ");
                    let newAdminPassword = readlineSync.question("New password: ");
                    let newAdmin = new Admin( newAdminName, newAdminPassword,adminRole);
                    this.adminManager.editAdmin(adminName, newAdmin);
                    break;
                }
                case 5: {
                    let deleteAdmin = readlineSync.question("Name: ");
                    this.adminManager.deleteAdmin(deleteAdmin);
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    }
}