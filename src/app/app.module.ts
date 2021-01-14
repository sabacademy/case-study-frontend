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
    MainNavigationMenuComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
