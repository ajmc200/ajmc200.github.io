import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //rootURL: String = 'http://localhost:8090/test'
  rootURL: String =
    'http://ec2-18-223-107-127.us-east-2.compute.amazonaws.com:8090'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Add methods for API calls here
  getTestData(): Observable<any> {
    console.log('in service making call');
    return this.http.get(this.rootURL + '/test', { responseType: 'text' });
  }
}
