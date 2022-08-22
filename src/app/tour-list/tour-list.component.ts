import { Component, OnInit } from '@angular/core';
import { NzapiService } from '../services/nzapi.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  tours: any[] = [];

  constructor(private api: NzapiService) { }

  ngOnInit(): void {
  }





}
