import {Admin} from "../Model/Admin";

const readlineSync = require("readline-sync")

export class AdminManager {
    static adminList: Admin[] = [new Admin(`admin0`, `123`, 0)];

    constructor() {

    }

    public registerAdmin() {
        let flag = true;
        let newAdminName;
        let newAdminPassword;
        while (flag) {
            newAdminName = readlineSync.question("Username: ");
            if (!newAdminName) {
                console.log("Username cannot be empty")
            } else {
                flag = false;
            }
        }
        while (!flag) {
            newAdminPassword = readlineSync.question("Password: ");
            if (!this.validatePassword(newAdminPassword)) {
                console.log("Password must be at least 6 characters and it has to contain lower characters or Upper characters number!")
            } else {
                flag = true;
            }
        }
        AdminManager.adminList.push(new Admin(newAdminName, newAdminPassword, 0));
    }

    public adminLogin(username: string, password: string): number {
        let index = -1;
        for (let admin of AdminManager.adminList) {
            if (admin.getUsername() === username && admin.getPassword() === password) {
                index = admin.getRole();
                return index;
            }
        }
    }
    public getAdmin(username: string): Admin | undefined {
        for (let admin of AdminManager.adminList) {
            if (admin.getUsername() === username) {
                return admin;
            }
        }
        return undefined;
    }

    public showAllAdmin(): Admin[] {
        return AdminManager.adminList;
    }

    public editAdmin(name: string, newObject: Admin) {
        let index = this.findByName(name);
        if (index === -1) {
            return "id does not exist";
        }
        AdminManager.adminList.splice(index, 1, newObject);
    }

    // public findById(id: number) {
    //     for (let i = 0; i < AdminManager.adminList.length; i++) {
    //         if (AdminManager.adminList[i].getId() === id) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    public findByName(name: string){
        for (let i = 0; i < AdminManager.adminList.length; i++) {
            if (AdminManager.adminList[i].getUsername()===name) {
                return i;
            }
        }
        return -1;
    }
    public deleteAdmin(name: string) {
        let index = this.findByName(name);
        if (index != -1) {
            AdminManager.adminList.splice(index, 1);
        } else return "This admin does not exist";
    }


    validatePassword(password: string): boolean {
        let regex = /^[A-Za-z0-9]{6,}$/;
        return regex.test(password)
    }
}



