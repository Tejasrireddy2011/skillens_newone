import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { ContactUsComponent } from './contact-us/contact-us.component'

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ItTrainingComponent } from './it-training/it-training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItDevelopmentComponent } from './it-development/it-development.component';
import { PlacementPreparationComponent } from './placement-preparation/placement-preparation.component';
import { PartnerComponent } from './partner/partner.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { DotnetModule } from './dotnet/dotnet.module';
import { LeadershipComponent } from './leadership/leadership.component';
import { CareersComponent } from './careers/careers.component';
import { PresentationSkillsComponent } from './presentation-skills/presentation-skills.component';
import { InterviewSkillsComponent } from './interview-skills/interview-skills.component';
import { GroupDiscussionSkillsComponent } from './group-discussion-skills/group-discussion-skills.component';
import { EnquiryFormComponent } from './shared/enquiry-form/enquiry-form.component';
import { CampusToCorporateComponent } from './campus-to-corporate/campus-to-corporate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternshipComponent,
    WorkshopsComponent,
    ItTrainingComponent,
    ItDevelopmentComponent,
    PlacementPreparationComponent,
    AboutUsComponent,
    ContactUsComponent,
    PartnerComponent,
    MobileValidatorDirective,
    GalleryComponent,
    LeadershipComponent,
    CareersComponent,
    PresentationSkillsComponent,
    InterviewSkillsComponent,
    GroupDiscussionSkillsComponent,
    CampusToCorporateComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
