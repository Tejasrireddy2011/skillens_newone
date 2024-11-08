import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSkillsComponent } from './interview-skills.component';

describe('InterviewSkillsComponent', () => {
  let component: InterviewSkillsComponent;
  let fixture: ComponentFixture<InterviewSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewSkillsComponent]
    });
    fixture = TestBed.createComponent(InterviewSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
