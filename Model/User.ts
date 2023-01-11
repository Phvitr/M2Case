export class User {
    private _username: string;
    private _password: string;
    private _role: number;

    constructor(username: string, password: string, role: number) {
        this._username = username;
        this._password = password;
        this._role = role;
    }


    getUsername(): string {
        return this._username;
    }

    setUsername(value: string): void {
        this._username = value;
    }

    getPassword(): string {
        return this._password;
    }

    setPassword(value: string): void {
        this._password = value;
    }

    getRole(): number {
        return this._role;
    }

    setRole(value: number): void {
        this._role = value;
    }
}