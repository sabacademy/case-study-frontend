import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }

  /**
   * Get all users
   * Mock Data
   */
  public getMockUsers(): User[] {

    const users: User[] = [];

    let user: User = new User();
    user.id = '1';
    user.email = 'antonio.lore@intelle-go.it';
    user.name = 'Antonio';
    user.surname = 'Lorè';
    user.enabled = true;
    users.push(user);

    user = new User();
    user.id = '2';
    user.name = 'Rosa';
    user.surname = 'Vox';
    user.email = 'rosa.vox@intelle-go.it';
    user.enabled = false;
    users.push(user);

    user = new User();
    user.id = '3';
    user.name = 'Andrea';
    user.surname = 'Mariani';
    user.email = 'andrea.mariani@intelle-go.it';
    user.enabled = true;
    users.push(user);

    user = new User();
    user.id = '4';
    user.name = 'Francesco';
    user.surname = 'Giusto';
    user.email = 'francesco.giusto@intelle-go.it';
    user.enabled = false;
    users.push(user);

    return users;
  }

  /**
   * Get all users
   * Real data
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  public saveUser(user: User): void {
    // TODO Observable
  }
}
