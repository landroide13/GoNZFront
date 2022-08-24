import { Component, OnInit} from '@angular/core';
import { NzapiService } from '../services/nzapi.service';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tours:any = [];
  tour: any;
  show = false;

  constructor(private api: NzapiService, private cookie: CookieService, private router: Router) { }

  getTours(){
    this.api.getTours().subscribe(
      data => {
        this.tours = data
      },
      err =>console.log(err)
    )
  }

  ngOnInit(){
    const gotoken = this.cookie.get('go-token')
    if(!gotoken){
      this.router.navigate(['/auth'])
    }else{
      this.getTours()
    }
  }

  tourClicked(t: any){
    console.log(t)
    this.show = !this.show
    this.selectTour = t
  }

  selectTour(tour: any){ 
    this.selectTour = tour
  }
  

}
