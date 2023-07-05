import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetAPIuserService {

  constructor(private http: HttpClient) { }
  baseURL = "https://fakestoreapi.com";

  //get all user
  getAllUserApi(): Observable<any> {
    return this.http.get(`${this.baseURL}/users`)
  }
  //get one user
  getUserDetail(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/users/${data}`)
  }

}
