import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AuthComponent } from './auth/auth.component';
import { TourListComponent } from './tour-list/tour-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'auth'},
  {path:'auth', component:AuthComponent},
  {path:'agents', component:AgentListComponent},
  {path:'tours', component:TourListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
