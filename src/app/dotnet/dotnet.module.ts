import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotnetRoutingModule } from './dotnet-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutTrainerComponent } from './about-trainer/about-trainer.component';
import { CourseHighlightsComponent } from './course-highlights/course-highlights.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CareerJourneyComponent } from './career-journey/career-journey.component';
import { WhatYouLearnComponent } from './what-you-learn/what-you-learn.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutTrainerComponent,
    CourseHighlightsComponent,
    CareerJourneyComponent,
    WhatYouLearnComponent
  ],
  imports: [
    CommonModule,
    DotnetRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class DotnetModule { }
