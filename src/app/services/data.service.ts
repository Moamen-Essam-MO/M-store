import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/json/data.json'; // Path relative to the assets folder

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // Adjust the path if your json folder is not directly under src/assets
    // If src/json is intended, you might need to configure angular.json assets
    return this.http.get<any>('/assets/json/data.json');
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl, { params: { _limit: 'users' } }); // Placeholder, adjust based on actual API or file structure
  }

  getItems(): Observable<any[]> {
     return this.http.get<any[]>(this.dataUrl, { params: { _limit: 'items' } }); // Placeholder, adjust based on actual API or file structure
  }

  // Add CRUD methods here (create, update, delete)
}
