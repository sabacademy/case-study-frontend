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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlannerComponent,
    CoursesComponent,
    TutorsComponent,
    StudentsComponent,
    AttendanceRegisterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
