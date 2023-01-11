export class Flight {

    private _flightId: number;
    private _flightName: string;
    constructor(flightId: number, flightName: string) {
        this._flightId = flightId;
        this._flightName = flightName;
    }
    getFlightId(): number{
        return this._flightId;
    }
    setFlightId(value: number) {
        this._flightId = value;
    }
    getFlightName(): string {
        return this._flightName;
    }
    setFlightName(value: string) {
        this._flightName = value;
    }
}