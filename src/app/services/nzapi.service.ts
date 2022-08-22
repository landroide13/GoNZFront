import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NzapiService {

  url = 'http://localhost:8000/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private  http: HttpClient) { }


  getAgents(){

  }

  getTours(){

  }

  getAgent(id: any){

  }

  getTour(id: any){
    
  }



}
