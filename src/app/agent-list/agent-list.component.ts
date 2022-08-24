import { Component, OnInit} from '@angular/core';
import { NzapiService } from '../services/nzapi.service'; 

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  agents:any = [];
  selectedAgent = null;
  agent:any;
  show = false;
  
  constructor(private api: NzapiService, private cookie: CookieService, private router: Router) { }

  getAgents(){
    this.api.getAgents().subscribe(
      data => {
        this.agents = data
      },
      err =>console.log(err)
    )
  }

  ngOnInit(){
    const gotoken = this.cookie.get('go-token')
    if(!gotoken){
      this.router.navigate(['/auth'])
    }else{
      this.getAgents()
    }
  }

  agentClicked(a: any){
    console.log(a);
    this.show = !this.show;
    this.selectAgent = a
  }

  selectAgent(agent: any){
    this.selectAgent = agent
  }

}
