import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from '../models/Movie'

const urlsuggest = 'http://localhost:5000/api/suggest';
const urlGetByUserId = 'http://localhost:5000/api/search';
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpclient: HttpClient) { }
  getAll():Observable<Movie[]>{
    return this.httpclient.get<Movie[]>(urlsuggest);
  }
  getByUser(obRequest:any):Observable<Movie[]>{
    return this.httpclient.post<Movie[]>(urlGetByUserId,obRequest);
  }

  
}
