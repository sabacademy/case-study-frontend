import { Attendant } from "./attendant";
import { Course } from "./course";
import { Tutor } from "./tutor";

export class AttendaceRecord {

    public course: Course;
    public tutor: Tutor;
    public dateTime: Date;
    public notes: string;
    public attendants: Attendant[];

    constructor() {}
}