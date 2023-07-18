import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://6425c05c556bad2a5b4201da.mockapi.io/students'

  getData():Observable<any>{
    return this.http.get(this.baseUrl)
  }
  postData(newstudentData:any):Observable<any>{
    return this.http.post(this.baseUrl, newstudentData)
  }
}
