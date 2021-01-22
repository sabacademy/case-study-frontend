import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-management-planner',
  templateUrl: './course-management-planner.component.html',
  styleUrls: ['./course-management-planner.component.css']
})
export class CourseManagementPlannerComponent implements OnInit {

  @ViewChild('plan', {static: false}) modal: ElementRef;

  @Output() OnSave: EventEmitter<Course> = new EventEmitter();

  public showBackground: boolean;

  public course: Course = new Course();

  public days: string[] = ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'];

  constructor() { }

  ngOnInit(): void {
  }

  public open(course: Course): void {
    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';
    this.course = course;
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
    this.course = new Course();
  }

  public save(): void {
    this.OnSave.emit(this.course);
    this.course = new Course();
  }

  public updateDay($event): void {
    if ( !this.course.days.find( d => d === $event.target.value ) ) {
      this.course.days.push($event.target.value);
    } else {
      this.course.days.splice(this.course.days.findIndex( d => d === $event.target.value ), 1);
    }
  }
}
