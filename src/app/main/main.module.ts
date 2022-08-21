import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { AgentListComponent } from '../agent-list/agent-list.component';
import { AgentDetailsComponent } from '../agent-details/agent-details.component';
import { TourDetailsComponent } from '../tour-details/tour-details.component';
import { TourListComponent } from '../tour-list/tour-list.component';

@NgModule({
  declarations: [
    MainComponent,
    AgentListComponent,
    AgentDetailsComponent,
    TourDetailsComponent,
    TourListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
