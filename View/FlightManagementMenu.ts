import {FlightManager} from "../Controller/FlightManager";
import {Flight} from "../Model/Flight";

const readlineSync = require('readline-sync');
export class FlightManagementMenu {
    private flightManager = new FlightManager()
    private menu = `
    Welcome to the Flight Management Menu
    please select a command:
    1. View all flights
    2. Search for a flight
    3. Add a flight
    4. Edit a flight
    5. Cancel a flight
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
                        console.table(this.flightManager.showAllFlight());
                        break;
                }
                case 2: {
                        let flightName = +readlineSync.question("Flight id: ");
                        let index = this.flightManager.getFlightById(flightName);
                        console.table(FlightManager.flightList[index]);
                        break;
                    }
                case 3: {
                        let flightID = +readlineSync.question("Flight id: ");
                        let flightName = readlineSync.question("Flight name: ");
                        this.flightManager.addFlight(flightID, flightName);
                        break;
                    }
                case 4: {
                        let flightId = +readlineSync.question("Flight id: ");
                        let NewFlightId = +readlineSync.question("New flight Id: ");
                        let newFlightName = readlineSync.question("New flight name: ");
                        let newFlight = new Flight(NewFlightId, newFlightName);
                        this.flightManager.updateFlight(flightId, newFlight);
                        break;
                    }
                case 5: {
                        let cancelFlight = +readlineSync.question("Flight id: ");
                        this.flightManager.deleteFlight(cancelFlight);
                        break;
                    }
                case 6: {
                        return;
                }
            }
        }
    }
}