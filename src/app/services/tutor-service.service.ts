import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Tutor } from '../models/tutor';


@Injectable({
  providedIn: 'root'
})
export class TutorServiceService {

  private tutorList: Tutor[] = []; // MOCK
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://backend-url/tutors';
  }

  public getAllTutors(): Observable<Tutor[]> {
    return this.httpClient.get<Tutor[]>(this.url);
  }
}
