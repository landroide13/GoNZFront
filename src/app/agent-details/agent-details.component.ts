import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {

  @Input() agent: any = null;
 

  constructor() { }

  ngOnInit(): void {
  }

 

}
