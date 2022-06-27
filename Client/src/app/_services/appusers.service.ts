import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { appUser } from '../_models/appUser';


@Injectable({
  providedIn: 'root'
})
export class AppusersService {
  
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAppUsers(){
    return this.http.get<appUser[]>(this.baseUrl + 'users');
  }

  getUser(username: string){
    return this.http.get<appUser>(this.baseUrl + 'users/' + username);
  }
}
