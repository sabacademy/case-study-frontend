import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'user-management', component: UserManagementComponent, pathMatch: 'full'},
  {path: 'students', component: StudentsComponent, pathMatch: 'full'},
  {path: 'course-management', component: CourseManagementComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
