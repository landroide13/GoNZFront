import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NzapiService {

  url = 'http://localhost:8000/';

  agent = 'api/agents/'
  tour = 'api/tours/'

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private  http: HttpClient) { }


  getAgents(){
    return this.http.get(this.url + this.agent)
  }

  getTours(){
    return this.http.get(this.url + this.tour)
  }

  getAgent(id: any){

  }

  getTour(id: any){
    
  }



}
