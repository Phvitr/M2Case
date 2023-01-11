import { FlightManager } from "../Controller/FlightManager";
import {Passenger} from "../Model/Passenger";
import {PassengerManager} from "../Controller/PassengerManager";

const readlineSync = require('readline-sync');
export class PassengerMenu {
    private flightManager = new FlightManager();
    private passengerManager = new PassengerManager();

    private menu = `
     Passenger Menu
     Please select your command: 
     1. View all available flights
     2. Search for a flight
     3. Book a flight
     4. Show booking information
     5. Edit your information
     6. Exit
     `;

    selection(): void {
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
                    let flightName = readlineSync.question("Flight name: ");
                    this.flightManager.getFlightById(flightName);
                    break;
                }
                case 3: {
                    let flightId = readlineSync.question("Flight id: ");
                    this.passengerManager.bookFlight(flightId);
                    console.log("Booked successfully");
                    break;
                }
                case 4: {
                    console.log("Your booking information :")
                    console.table(this.passengerManager.showBooking());
                    break;
                }
                case 5: {
                    let passengerId = +readlineSync.question("id: ");
                    let NewId = readlineSync.question("New Id: ");
                    let newPassengerName = readlineSync.question("New username: ");
                    let newPassengerPassword = readlineSync.question("New password: ");
                    let newPassenger = new Passenger(NewId, newPassengerName, newPassengerPassword);
                    this.passengerManager.editPassenger(passengerId, newPassenger);
                    break;
                }
                 case 6: {
                    return;
                }
            }
        }
    }
}
