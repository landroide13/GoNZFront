import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  @Input() tour: any;

  constructor() { }

  ngOnInit(): void {
  }

}
