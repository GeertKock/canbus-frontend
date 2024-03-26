import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; 
  private canData: any[] = [];

  constructor(private http: HttpClient) {}

  fetchCanData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/canData`).pipe(
      tap(data => this.canData = data)
    )
    ;
  }

  getCanData(): any[] {
    return this.canData;
  }
}
