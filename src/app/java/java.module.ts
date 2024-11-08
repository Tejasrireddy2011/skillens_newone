import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavaRoutingModule } from './java-routing.module';
import { AboutTrainerComponent } from './about-trainer/about-trainer.component';
import { CourseHighlightsComponent } from './course-highlights/course-highlights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CareerJourneyComponent } from './career-journey/career-journey.component';
import { WhatYouLearnComponent } from './what-you-learn/what-you-learn.component';


@NgModule({
  declarations: [
    AboutTrainerComponent,
    CourseHighlightsComponent,
    DashboardComponent,
    CareerJourneyComponent,
    WhatYouLearnComponent
  ],
  imports: [
    CommonModule,
    JavaRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class JavaModule { }
