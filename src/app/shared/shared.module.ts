import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { OurTrainingMethodologyComponent } from './our-training-methodology/our-training-methodology.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { FormsModule } from '@angular/forms';
import { ClientSideComponent } from './client-side/client-side.component';
import { DatabaseComponent } from './database/database.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';
import { WhoCanJoinComponent } from './who-can-join/who-can-join.component';


@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteFooterComponent,
    SidebarComponent,
    JoinNowComponent,
    OurTrainingMethodologyComponent,
    EnquiryFormComponent,
    ClientSideComponent,
    DatabaseComponent,
    SocialMediaLinksComponent,
    WhoCanJoinComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    SiteHeaderComponent,
    SiteFooterComponent,
    SidebarComponent,
    JoinNowComponent,
    OurTrainingMethodologyComponent,
    EnquiryFormComponent,
    ClientSideComponent,
    DatabaseComponent,
    SocialMediaLinksComponent,
    WhoCanJoinComponent
  ]
})
export class SharedModule { }
