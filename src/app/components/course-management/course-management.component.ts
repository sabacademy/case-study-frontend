import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';
import { FeedbackMessageComponent } from '../feedback-message/feedback-message.component';
import { CourseManagementConfirmModalComponent } from './course-management-confirm-modal/course-management-confirm-modal.component';
import { CourseManagementModalComponent } from './course-management-modal/course-management-modal.component';
import { CourseManagementPlannerComponent } from './course-management-planner/course-management-planner.component';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal: CourseManagementModalComponent;
  @ViewChild('confirmModal', {static: false}) confirmModal: CourseManagementConfirmModalComponent;
  @ViewChild('plannerModal', {static: false}) plannerModal: CourseManagementPlannerComponent;
  @ViewChild('feedbackMessage', {static: false}) feedbackMessage: FeedbackMessageComponent;

  public courses: Course[] = [];

  public columns: any[] = [];

  public showModal: boolean;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.initColumns();
    this.loadCourses();
  }

  private initColumns(): void {
    this.columns = [
      {field: 'title', header: 'Titolo del corso'},
      {field: 'teacher', header: 'Docente'},
      {field: 'functions', header: ''}
    ];
  }

  private loadCourses(): void {

    // MOCK DATA FROM SERVICE
    this.loadMockData();

    // REAL DATA
    // this.loadData();
  }

  private loadMockData(): void {
    this.courses = this.courseService.getMockCourses();
  }

  private loadData(): void {
    this.courseService.getCourses().subscribe(
      courseList => {
        this.courses = courseList;
      },
      error => {
        this.feedbackMessage.showError(error);
      });
  }

  public disable(course: Course): void {

    // DISABLE ON MOCK DATA
    this.courses.find( c => course.id === c.id).enabled = !course.enabled;

    // TODO - DISABLE ON REAL DATA

    // Feedback message with component
    this.feedbackMessage.showSuccess('Corso ' + (!course.enabled ? 'disabilitato' : 'abilitato'));
  }


  public saveNewCourse($event: Course): void {
    // SAVE MOCK DATA
    this.courses.push($event);

    // TODO - SAVE ON REAL DATA

    // Feedback message with component
    this.feedbackMessage.showSuccess('Salvataggio effettuato');

    this.closeModal();
  }

  public saveCourse(course: Course): void {
    // SAVE MOCK DATA
    this.courses.splice(this.courses.findIndex( c => course.id === c.id), 1, course);

    // TODO - SAVE ON REAL DATA

    // Feedback message with component
    this.feedbackMessage.showSuccess('Salvataggio effettuato');

    this.closeModal();
    this.closePlanner();
  }

  public delete(course: Course): void {

    // DELETE MOCK DATA
    this.courses.splice(this.courses.findIndex( c => course.id === c.id), 1);

    // Feedback message with component
    this.feedbackMessage.showSuccess('Corso eliminato');

    this.closeConfirmModal();
  }

  public openModal(course?: Course): void {
    this.showModal = true;
    this.modal.open(course);
  }

  public closeModal(): void {
    this.showModal = false;
    this.modal.close();
  }

  public openConfirmModal(course: Course): void {
    this.showModal = true;
    this.confirmModal.open(course);
  }

  private closeConfirmModal(): void {
    this.showModal = false;
    this.confirmModal.close();
  }
  
  public openPlanner(course?: Course): void {
    this.showModal = true;
    this.plannerModal.open(course);
  }

  public closePlanner(): void {
    this.showModal = false;
    this.plannerModal.close();
  }
}
