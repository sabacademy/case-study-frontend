import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-management-modal',
  templateUrl: './user-management-modal.component.html',
  styleUrls: ['./user-management-modal.component.css']
})
export class UserManagementModalComponent implements OnInit {

  @ViewChild('createModifyTeacher', {static: false}) modal: ElementRef;

  @Output() OnSave: EventEmitter<User> = new EventEmitter();

  public showBackground: boolean;

  public userModel: User = new User();
  private userInput: User;

  constructor() { }

  ngOnInit(): void {}

  public open(user?: User): void {
    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';

    // If user parameter is set, we're going to modify user's data
    if ( user ) {
      this.userInput = user;
      this.userModel = Object.assign(new User(), user);
    }
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
  }

  public save(): void {
    this.OnSave.emit(this.userModel);
  }
}
