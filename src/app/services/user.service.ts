import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const urlregister = 'http://localhost:5000/api/register';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http : HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post(urlregister, data);
  }
}
