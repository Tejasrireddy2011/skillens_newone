import { OurTrainingMethodologyComponent } from "../shared/our-training-methodology/our-training-methodology.component";
import { WhoCanJoinComponent } from "../shared/who-can-join/who-can-join.component";
import { AboutTrainerComponent } from "./about-trainer/about-trainer.component";
import { CareerJourneyComponent } from "./career-journey/career-journey.component";
import { CourseHighlightsComponent } from "./course-highlights/course-highlights.component";
import { WhatYouLearnComponent } from "./what-you-learn/what-you-learn.component";

export const CHILDROUTES = [
    { path: '', component: WhatYouLearnComponent },
    { path: 'what-you-learn', component: WhatYouLearnComponent },
    { path: 'about-trainer', component: AboutTrainerComponent },
    { path: 'career-journey', component: CareerJourneyComponent },
    { path: 'course-highlights', component: CourseHighlightsComponent },
    { path: 'who-can-join', component: WhoCanJoinComponent },
    { path: 'our-training-methodology', component: OurTrainingMethodologyComponent }
];