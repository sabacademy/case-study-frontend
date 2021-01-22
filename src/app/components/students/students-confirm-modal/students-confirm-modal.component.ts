import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-confirm-modal',
  templateUrl: './students-confirm-modal.component.html',
  styleUrls: ['./students-confirm-modal.component.css']
})
export class StudentsConfirmModalComponent implements OnInit {

  @Output() OnConfirm: EventEmitter<Student> = new EventEmitter();

  @ViewChild('deleteStudent', {static: false}) modal: ElementRef;

  public student: Student;

  public showBackground: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public open(student: Student): void {
    this.student = student;

    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
  }

  public confirm(): void {
    this.OnConfirm.emit(this.student);
  }
}
