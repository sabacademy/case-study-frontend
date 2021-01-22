import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-management-confirm-modal',
  templateUrl: './course-management-confirm-modal.component.html',
  styleUrls: ['./course-management-confirm-modal.component.css']
})
export class CourseManagementConfirmModalComponent implements OnInit {

  @Output() OnConfirm: EventEmitter<Course> = new EventEmitter();

  @ViewChild('deleteCourse', {static: false}) modal: ElementRef;

  public course: Course;

  public showBackground: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public open(course: Course): void {
    this.course = course;

    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
  }

  public confirm(): void {
    this.OnConfirm.emit(this.course);
  }
}
