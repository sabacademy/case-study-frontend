import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';
import { FeedbackMessageComponent } from '../feedback-message/feedback-message.component';
import { StudentsConfirmModalComponent } from './students-confirm-modal/students-confirm-modal.component';
import { StudentsModalComponent } from './students-modal/students-modal.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public columns: any[] = [];

  public students: Student[] = [];

  public showModal: boolean;

  @ViewChild('modal', {static: false}) modal: StudentsModalComponent;
  @ViewChild('confirmModal', {static: false}) confirmModal: StudentsConfirmModalComponent;
  @ViewChild('feedbackMessage', {static: false}) feedbackMessage: FeedbackMessageComponent;

  constructor(private studentsService: StudentsService) {}
 
  ngOnInit(): void {
    this.initColumns();
    this.loadUsers();
  }

  /**
   * Column creation function
   * - Colum order is important!
   * - Last column has no header because it is used for displaying CRUD action buttons
   */
  private initColumns(): void {
    this.columns = [
      {field: 'name', header: 'Nome'},
      {field: 'surname', header: 'Cognome'},
      {field: 'email', header: 'Email'},
      {field: 'functions', header: ''}
    ];
  }

  /**
   * - MOCK DATA : static data;
   * - MOCK DATA FROM SERVICE : static data loaded from a service (real data simulation)
   * - REAL DATA : data loaded from a real REST Web Service
   */
  private loadUsers(): void {
    // MOCK DATA FROM SERVICE
    this.loadMockData();

    // REAL DATA
    // this.loadData();
  }


  private loadMockData(): void {
    this.students = this.studentsService.getMockStudents();
  }

  private loadData(): void {
    this.studentsService.getStudents().subscribe(
      studentList => {
        this.students = studentList;
      },
      error => {
        // TODO erro toString() OR exact model property
        this.feedbackMessage.showError(error);
      });
  }

  public openModal(student?: Student): void {
    this.showModal = true;
    this.modal.open(student);
  }

  public closeModal(): void {
    this.showModal = false;
    this.modal.close();
  }

  public openConfirmModal(student: Student): void {
    this.showModal = true;
    this.confirmModal.open(student);
  }

  private closeConfirmModal(): void {
    this.showModal = false;
    this.confirmModal.close();
  }

  public saveNewStudent($event: Student): void {
    // SAVE MOCK DATA
    this.students.push($event);

    // TODO - SAVE ON REAL DATA

    // Feedback message
    // alert('Salvataggio effettuato');

    // Feedback message with component
    this.feedbackMessage.showSuccess('Salvataggio effettuato');

    this.closeModal();
  }

  public saveStudent(student: Student): void {
    // SAVE MOCK DATA
    this.students.splice(this.students.findIndex( s => student.id === s.id), 1, student);

    // TODO - SAVE ON REAL DATA

    // Feedback message
    // alert('Salvataggio effettuato');

    // Feedback message with component
    this.feedbackMessage.showSuccess('Salvataggio effettuato');

    this.closeModal();
  }

  public delete(student: Student): void {

    // DELETE MOCK DATA
    this.students.splice(this.students.findIndex( s => student.id === s.id), 1);

    // Feedback message
    // alert('Utente eliminato');

    // Feedback message with component
    this.feedbackMessage.showSuccess('Utente eliminato');

    this.closeConfirmModal();
  }
}
