import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //rootURL: String = 'http://localhost:8090/test'
  rootURL: String = 'https://www.deckofcardsapi.com/api/deck/new'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Add methods for API calls here
  getTestData(): Observable<any> {
    console.log('in service making call');
    return this.http.get(this.rootURL + '/', { responseType: 'text' });
  }
}
