import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private apiUrl = 'https://dummyjson.com/c/1d6b-1f6b-4246-bd42'; 

  constructor(private http: HttpClient) { }

  // Method to fetch assignments from the API
  getAssignments(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
