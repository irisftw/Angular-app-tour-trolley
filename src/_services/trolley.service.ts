import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trolley } from '../_models/trolley';

@Injectable({
  providedIn: 'root',
})
export class TrolleyService {
  private apiURL = './assets/trolleys.json';
  constructor(private http: HttpClient) {}

  getTrolleys(): Observable<Trolley[]> {
    return this.http.get<Trolley[]>(this.apiURL);
  }
}
