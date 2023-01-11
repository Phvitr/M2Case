import {Flight} from "../Model/Flight";

export class FlightManager {
    static flightList: Flight[] = [];

    public showAllFlight(): Flight[] {
        return FlightManager.flightList
    }
    public getFlightById(flightId: number) {
        for (let i = 0; i < FlightManager.flightList.length; i++) {
            if (FlightManager.flightList[i].getFlightId() === flightId) {
                return i
            }
        }
        return -1;
    }
    public addFlight(flightId: number, flightName: string): void {
        let flight = new Flight(flightId, flightName);
        FlightManager.flightList.push(flight);
    }
    public updateFlight(flightId: number, newObject: Flight) {
        let index = this.getFlightById(flightId);
        if (index === -1) {
            return "Flight not found";
        }
        FlightManager.flightList.splice(index, 1, newObject);
    }
    public deleteFlight(flight: number) {
        let index = this.getFlightById(flight);
        if (index === -1) {
            return "Flight not found";
        }
        FlightManager.flightList.splice(index, 1);
    }
}