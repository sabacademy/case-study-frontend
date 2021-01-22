import { Student } from './student';

export class Course {

    public id: string;
    public title: string;
    public teacher: string;
    public enabled: boolean; // TODO --> active

    public code: string;
    public name: string;
    public active: boolean;
    public students: Student[];

    // FRONTEND ONLY
    public dtStart: Date;
    public dtEnd: Date;
    public days: string[];
    public hhStart: string;
    public hhEnd: string;

    constructor() {
        this.days = [];
    }
}