import { Component, OnInit} from '@angular/core';
import { NzapiService } from '../services/nzapi.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {


  tours:any = [];
  tour: any;

  constructor(private api: NzapiService) { }

  getTours(){
    this.api.getTours().subscribe(
      data => {
        this.tours = data
      },
      err =>console.log(err)
    )
  }

  ngOnInit(){
    this.getTours()
  }

  tourClicked(t: any){
    this.selectTour = t
  }

  selectTour(tour: any){
    this.selectTour = tour
  }


}
