export class Student {

    private _id: string;
    private _name: string;
    private _surname: string;
    private _email: string;

    constructor() {}

    get id(): string { return this._id; }
    set id(value: string) { this._id = value; }

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

    get surname(): string { return this._surname; }
    set surname(value: string) { this._surname = value; }

    get email(): string { return this._email; }
    set email(value: string) { this._email = value; }
}