import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserManagementService } from 'src/app/services/user-management.service';
import { FeedbackMessageComponent } from '../feedback-message/feedback-message.component';
import { UserManagementConfirmModalComponent } from './user-management-confirm-modal/user-management-confirm-modal.component';
import { UserManagementModalComponent } from './user-management-modal/user-management-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public columns: any[] = [];

  public users: User[] = [];

  public showModal: boolean;

  @ViewChild('modal', {static: false}) modal: UserManagementModalComponent;
  @ViewChild('confirmModal', {static: false}) confirmModal: UserManagementConfirmModalComponent;
  @ViewChild('feedbackMessage', {static: false}) feedbackMessage: FeedbackMessageComponent;

  constructor(private userService: UserManagementService) { }

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
    // MOCK DATA
    this.createMockData();

    // MOCK DATA FROM SERVICE
    // this.loadMockData();

    // REAL DATA
    // this.loadData();
  }

  private createMockData(): void {

    let user: User = new User();
    user.id = '1';
    user.email = 'antonio.lore@intelle-go.it';
    user.name = 'Antonio';
    user.surname = 'Lorè';
    user.enabled = true;
    this.users.push(user);

    user = new User();
    user.id = '2';
    user.name = 'Rosa';
    user.surname = 'Vox';
    user.email = 'rosa.vox@intelle-go.it';
    user.enabled = false;
    this.users.push(user);

    user = new User();
    user.id = '3';
    user.name = 'Andrea';
    user.surname = 'Mariani';
    user.email = 'andrea.mariani@intelle-go.it';
    user.enabled = false;
    this.users.push(user);

    user = new User();
    user.id = '4';
    user.name = 'Francesco';
    user.surname = 'Giusto';
    user.email = 'francesco.giusto@intelle-go.it';
    user.enabled = true;
    this.users.push(user);
  }

  private loadMockData(): void {
    this.users = this.userService.getMockUsers();
  }

  public openModal(user?: User): void {
    this.showModal = true;
    this.modal.open(user);
  }

  private closeModal(): void {
    this.showModal = false;
    this.modal.close();
  }

  public openConfirmModal(user: User): void {
    this.showModal = true;
    this.confirmModal.open(user);
  }

  private closeConfirmModal(): void {
    this.showModal = false;
    this.confirmModal.close();
  }

  public saveNewUser($event: User): void {
    // SAVE MOCK DATA
    this.users.push($event);

    // TODO - SAVE ON REAL DATA

    // Feedback message
    // alert('Salvataggio effettuato');

    // Feedback message with component
    this.feedbackMessage.showSuccess('Salvataggio effettuato');

    this.closeModal();
  }

  private saveUser(user: User): void {
    // SAVE MOCK DATA
    this.users.splice(this.users.findIndex( u => user.id === u.id), 1, user);

    // TODO - SAVE ON REAL DATA

    // Feedback message
    // alert('Salvataggio effettuato');

    // Feedback message with component
    this.feedbackMessage.showSuccess('Salvataggio effettuato');

    this.closeModal();
  }

  public disable(user: User): void {

    // DISABLE ON MOCK DATA
    this.users.find( u => user.id === u.id).enabled = !user.enabled;

    // TODO - DISABLE ON REAL DATA

    // Feedback message
    // alert('Utente ' + (!user.enabled ? 'disabilitato' : 'abilitato') );

    // Feedback message with component
    this.feedbackMessage.showSuccess('Utente ' + (!user.enabled ? 'disabilitato' : 'abilitato'));
  }

  public delete(user: User): void {

    // DELETE MOCK DATA
    this.users.splice(this.users.findIndex( u => user.id === u.id), 1);

    // Feedback message
    // alert('Utente eliminato');

    // Feedback message with component
    this.feedbackMessage.showSuccess('Utente eliminato');

    this.closeConfirmModal();
  }
}
