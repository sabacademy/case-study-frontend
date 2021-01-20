import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlannerComponent } from './components/planner/planner.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { StudentsComponent } from './components/students/students.component';
import { AttendanceRegisterComponent } from './components/attendance-register/attendance-register.component';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavigationMenuComponent } from './components/main-navigation-menu/main-navigation-menu.component';
import { UserManagementModalComponent } from './components/user-management/user-management-modal/user-management-modal.component';
import { UserManagementConfirmModalComponent } from './components/user-management/user-management-confirm-modal/user-management-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeedbackMessageComponent } from './components/feedback-message/feedback-message.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserManagementService } from './services/user-management.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlannerComponent,
    CoursesComponent,
    TutorsComponent,
    StudentsComponent,
    AttendanceRegisterComponent,
    UserManagementComponent,
    TopHeaderComponent,
    FooterComponent,
    MainNavigationMenuComponent,
    UserManagementModalComponent,
    UserManagementConfirmModalComponent,
    FeedbackMessageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
