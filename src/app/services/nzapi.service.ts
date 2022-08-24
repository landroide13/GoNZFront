import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NzapiService {

  url = 'http://localhost:8000/';

  agent = 'api/agents/'
  tour = 'api/tours/'
  user = 'api/users/'

  //token = this.cookie.get('go-token');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
     //authorization: `Token ${this.token}`
  })

  constructor(private  http: HttpClient, private cookie: CookieService) { }


  getAgents(){
    return this.http.get(this.url + this.agent,{headers: this.headers})
  }

  getTours(){
    return this.http.get(this.url + this.tour, {headers: this.headers})
  }

  getUsers(){
    return this.http.get(this.url + this.user, {headers: this.headers})
  }

  getTour(id: any){
    
  }

  loginUser(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(`${this.url}auth/`, body, {headers: this.headers})
  }

  registerUser(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(`${this.url}api/users/`, body, {headers: this.headers})
  }

  getAuthHeaders(){
    const token = this.cookie.get('go-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    })
  }

}
