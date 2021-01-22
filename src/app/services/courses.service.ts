import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getMockCourses(): Course[] {

    const courses: Course[] = [];

    let course: Course = new Course();
    course.id = '1';
    course.title = 'Java';
    course.teacher = 'Antonio Lorè';
    course.enabled = true;
    courses.push(course);

    course = new Course();
    course.id = '2';
    course.title = 'Html/Css';
    course.teacher = 'Rosa Vox';
    course.enabled = false;
    courses.push(course);

    course = new Course();
    course.id = '3';
    course.title = 'Angular';
    course.teacher = 'Andrea Mariani';
    course.enabled = true;
    courses.push(course);

    course = new Course();
    course.id = '4';
    course.title = 'Spring Framework';
    course.teacher = 'Francesco Giusto';
    course.enabled = false;
    courses.push(course);

    return courses;
  }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/users');
  }
}
