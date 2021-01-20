import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-message',
  templateUrl: './feedback-message.component.html',
  styleUrls: ['./feedback-message.component.css']
})
export class FeedbackMessageComponent implements OnInit {

  public success: boolean;
  public warning: boolean;
  public error: boolean;
  public errorMessage: string;

  constructor() {}

  ngOnInit(): void {}

  public showSuccess(message: string): void {
    this.errorMessage = message;
    this.success = true;
  }

  public showWarning(message: string): void {
    this.errorMessage = message;
    this.warning = true;
  }

  public showError(message: string): void {
    this.errorMessage = message;
    this.error = true;
  }

  private resetFeedback() {
    this.success = false;
    this.warning = false;
    this.error = false;
    this.errorMessage = '';
  }

}
