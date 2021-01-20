import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-management-confirm-modal',
  templateUrl: './user-management-confirm-modal.component.html',
  styleUrls: ['./user-management-confirm-modal.component.css']
})
export class UserManagementConfirmModalComponent implements OnInit {

  @Output() OnConfirm: EventEmitter<User> = new EventEmitter();

  @ViewChild('deleteTeacher', {static: false}) modal: ElementRef;

  public user: User;

  public showBackground: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public open(user: User): void {
    this.user = user;

    this.showBackground = true;
    this.modal.nativeElement.style.display = 'block';
  }

  public close(): void {
    this.showBackground = false;
    this.modal.nativeElement.style.display = 'none';
  }

  public confirm(): void {
    this.OnConfirm.emit(this.user);
  }
}
