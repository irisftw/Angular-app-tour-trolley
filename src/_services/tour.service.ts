import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../_models/tour';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private apiURL = './assets/tour.json';
  constructor(private http: HttpClient) {}
  getTours(): Observable<Tour> {
    return this.http.get<Tour>(this.apiURL);
  }
}
