import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  /**
   * Get all students
   * Mock Data
   */
  public getMockStudents(): Student[] {

    const students: Student[] = [];

    let student: Student = new Student();
    student.id = '1';
    student.email = 'mimmotripaldi1997@gmail.com';
    student.name = 'Cosimo';
    student.surname = 'Tripaldi';
    students.push(student);

    student = new Student();
    student.id = '2';
    student.name = 'Grei';
    student.surname = 'Gashi';
    student.email = 'ggashi18@epoka.edu.al';
    students.push(student);

    student = new Student();
    student.id = '3';
    student.name = 'Mirko';
    student.surname = 'Castria';
    student.email = 'mirkocastria@live.it';
    students.push(student);

    student = new Student();
    student.id = '4';
    student.name = 'Cristian';
    student.surname = 'Fersini';
    student.email = 'fersinicristian@gmail.com';
    students.push(student);

    student = new Student();
    student.id = '5';
    student.name = 'Roberto';
    student.surname = 'Ciancio';
    student.email = 'ciancio.roberto96@gmail.com';
    students.push(student);

    student = new Student();
    student.id = '6';
    student.name = 'Bashkim';
    student.surname = 'Dakoli';
    student.email = 'dakolibashkim@gmail.com';
    students.push(student);
    return students;

    /**
     * 
     * <tr>
                                <td>Rei</td>
                                <td>Mandija</td>
                                <td>rmandija14@epoka.edu.al</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Klevis</td>
                                <td>Ngjela</td>
                                <td>ngjela11@gmail.com</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Giuseppe Giorgio</td>
                                <td>Mininno</td>
                                <td>mininno.giorgio@gmail.com</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Fabio</td>
                                <td>Rossano</td>
                                <td>fabiorossano77@gmail.com</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Aurelio</td>
                                <td>Zizzo</td>
                                <td>Aurelio.zizzo00@gmail.com</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Cosimo Francesco</td>
                                <td>Spinelli</td>
                                <td>Spinellicosimofrancesco@gmail.com</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Andrea</td>
                                <td>Petrelli</td>
                                <td>dott.petrelli@gmail.com</td>
                                <td>
                                    <i class="fa fa-edit" style="cursor:pointer" title="Modifica allievo" data-toggle="modal" data-target="#editStudent"></i>
                                    <i class="fa fa-trash" style="cursor:pointer;color:red" title="Elimina allievo" data-toggle="modal" data-target="#deleteStudent"></i>
                                </td>
                            </tr>
     */
  }

  /**
   * Get all students
   * Real data
   */
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/users');
  }

  public saveStudent(student: Student): void {
    // TODO Observable
  }
}
