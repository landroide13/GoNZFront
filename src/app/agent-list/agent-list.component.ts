import { Component, OnInit } from '@angular/core';
import { NzapiService } from '../services/nzapi.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  agents: any[] = [];

  constructor(private api: NzapiService) { }

  ngOnInit(): void {
  }



}
