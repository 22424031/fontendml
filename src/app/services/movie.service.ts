import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from '../models/Movie'

const urlsuggest = 'http://localhost:5000/api/suggest';
const urlGetByUserId = 'http://localhost:5000/api/get-movies-byuserid/';
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpclient: HttpClient) { }
  getAll():Observable<Movie[]>{
    return this.httpclient.get<Movie[]>(urlsuggest);
  }
  getByUser(userId:number):Observable<Movie[]>{
    return this.httpclient.get<Movie[]>(urlGetByUserId+userId);
  }

  
}
