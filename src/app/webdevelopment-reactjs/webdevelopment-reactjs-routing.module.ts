import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CHILDROUTES } from './child-routing';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: CHILDROUTES }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebdevelopmentReactjsRoutingModule { }
