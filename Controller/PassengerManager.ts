import {Passenger} from "../Model/Passenger";
import {FlightManager} from "./FlightManager";

export class PassengerManager {
    static passengerList: Passenger[] = [];
    static passengerFlightList = [];

    constructor () {

    }

    public bookFlight(id: number) {
        for (let i = 0; i < FlightManager.flightList.length; i++) {
            if (FlightManager.flightList[i].getFlightId() == id) {
                PassengerManager.passengerFlightList.push(FlightManager.flightList[i]);
            }
        }
    }

    public showBooking() {
        return PassengerManager.passengerFlightList;
    }

    public addPassenger(passenger: Passenger): void {
        PassengerManager.passengerList.push(passenger);
    }

    public registerPassenger(name: string, password: string, role = 1): void {
        let passenger = new Passenger(name, password, role );
        this.addPassenger(passenger);
    }

    public findById(id: number) {
        for (let i = 0; i < PassengerManager.passengerList.length; i++) {
            if (PassengerManager.passengerList[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }
    public editPassenger(id: number, newObject: Passenger) {
        let index = this.findById(id);
        if (index === -1) {
            return "id does not exist";
        }
        PassengerManager.passengerList.splice(index, 1, newObject);
    }
}

