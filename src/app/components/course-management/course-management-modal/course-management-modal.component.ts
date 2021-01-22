import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-management-modal',
  templateUrl: './course-management-modal.component.html',
  styleUrls: ['./course-management-modal.component.css']
})
export class CourseManagementModalComponent implements OnInit {

  @ViewChild('createModifyCourse', {static: false}) modal: ElementRef;

  @Output() OnSave: EventEmitter<Course> = new EventEmitter();

  public showBackground: boolean;

  public courseModel: Course = new Course();
  private courseInput: Course;

  constructor() { }

  ngOnInit(): void {}

  public open(course?: Course): void {
    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';

    // If course parameter is set, we're going to modify course's data
    if ( course ) {
      this.courseInput = course;
      this.courseModel = Object.assign(new Course(), course);
    } else {
      this.courseModel = new Course();
    }
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
  }

  public save(): void {
    this.OnSave.emit(this.courseModel);
  }
}
