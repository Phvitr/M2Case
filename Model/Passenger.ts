import {User} from "./User";

export class Passenger extends User {
    private _id: number;

    constructor(username: string, password: string, role: number) {
        super(username, password, role);
    }
    getId(): number {
        return this._id;
    }
    setId(value: number) {
        this._id = value;
    }
}