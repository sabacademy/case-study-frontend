export class Tutor {

    private _id: string;
    private _name: string;
    private _surname: string;
    private _course: string;

    constructor() {}

    get id(): string      { return this._id; }
    set id(value: string) { this._id = value; }

    get name(): string      { return this._name; }
    set name(value: string) { this._name = value; }

    get surname(): string      { return this._surname; }
    set surname(value: string) { this._surname = value; }

    get course(): string      { return this._course; }
    set course(value: string) { this._course = value; }
}
