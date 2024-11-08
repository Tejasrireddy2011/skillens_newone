import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerbiRoutingModule } from './powerbi-routing.module';
import { AboutTrainerComponent } from './about-trainer/about-trainer.component';
import { CareerJourneyComponent } from './career-journey/career-journey.component';
import { CourseHighlightsComponent } from './course-highlights/course-highlights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WhatYouLearnComponent } from './what-you-learn/what-you-learn.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutTrainerComponent,
    CareerJourneyComponent,
    CourseHighlightsComponent,
    DashboardComponent,
    WhatYouLearnComponent
  ],
  imports: [
    CommonModule,
    PowerbiRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PowerbiModule { }
