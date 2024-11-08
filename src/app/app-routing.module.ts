import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InternshipComponent } from './internship/internship.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ItTrainingComponent } from './it-training/it-training.component';
import { ItDevelopmentComponent } from './it-development/it-development.component';
import { PlacementPreparationComponent } from './placement-preparation/placement-preparation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { CareersComponent } from './careers/careers.component';
import { InterviewSkillsComponent } from './interview-skills/interview-skills.component';
import { PresentationSkillsComponent } from './presentation-skills/presentation-skills.component';
import { GroupDiscussionSkillsComponent } from './group-discussion-skills/group-discussion-skills.component';
import { EnquiryFormComponent } from './shared/enquiry-form/enquiry-form.component';
import { JoinNowComponent } from './shared/join-now/join-now.component';
import { CampusToCorporateComponent } from './campus-to-corporate/campus-to-corporate.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'internship', component: InternshipComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'it-training', component: ItTrainingComponent },
  { path: 'it-development', component: ItDevelopmentComponent },
  { path: 'placement-preparation', component: PlacementPreparationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'leadership', component: LeadershipComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'enquiry-form', component: EnquiryFormComponent},
  { path: 'join-now', component: JoinNowComponent},
  { path: 'campus-to-corporate', component: CampusToCorporateComponent},
  { path: 'interview-skills', component: InterviewSkillsComponent},
  { path: 'presentation-skills', component: PresentationSkillsComponent},
  { path: 'group-discussion-skills', component: GroupDiscussionSkillsComponent},
  { path: 'dotnet', loadChildren: () => import("./dotnet/dotnet.module").then(x => x.DotnetModule) },
  { path: 'java', loadChildren: () => import("./java/java.module").then(x => x.JavaModule) },
  { path: 'python', loadChildren: () => import("./python/python.module").then(x => x.PythonModule) },
  { path: 'testing', loadChildren: () => import("./testing/testing.module").then(x => x.TestingModule) },
  { path: 'aws', loadChildren: () => import("./aws/aws.module").then(x => x.AwsModule) },
  { path: 'sql-server', loadChildren: () => import("./sql-server/sql-server.module").then(x => x.SqlServerModule) },
  { path: 'oracle', loadChildren: () => import("./oracle/oracle.module").then(x => x.OracleModule) },
  { path: 'powerbi', loadChildren: () => import("./powerbi/powerbi.module").then(x => x.PowerbiModule) },
  { path: 'tableau', loadChildren: () => import("./tableau/tableau.module").then(x => x.TableauModule) },
  { path: 'hr-training', loadChildren: () => import("./hr-training/hr-training.module").then(x => x.HrTrainingModule) },
  { path: 'webdevelopment-angular', loadChildren: () => import("./webdevelopment-angular/webdevelopment-angular.module").then(x => x.WebdevelopmentAngularModule) },
  { path: 'webdevelopment-reactjs', loadChildren: () => import("./webdevelopment-reactjs/webdevelopment-reactjs.module").then(x => x.WebdevelopmentReactjsModule) },
  { path: 'digital-marketing', loadChildren: () => import("./digital-marketing/digital-marketing.module").then(x => x.DigitalMarketingModule) },

  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
