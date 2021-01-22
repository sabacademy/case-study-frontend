import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrls: ['./students-modal.component.css']
})
export class StudentsModalComponent implements OnInit {

  @ViewChild('createModifyStudent', {static: false}) modal: ElementRef;

  @Output() OnSave: EventEmitter<Student> = new EventEmitter();

  public showBackground: boolean;

  public studentModel: Student = new Student();
  private studentInput: Student;

  constructor() { }

  ngOnInit(): void {}

  public open(student?: Student): void {
    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';

    // If user parameter is set, we're going to modify user's data
    if ( student ) {
      this.studentInput = student;
      this.studentModel = Object.assign(new Student(), student);
    }
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
  }

  public save(): void {
    this.OnSave.emit(this.studentModel);
  }
}
