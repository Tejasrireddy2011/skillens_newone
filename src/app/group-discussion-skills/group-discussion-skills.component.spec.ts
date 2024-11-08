import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDiscussionSkillsComponent } from './group-discussion-skills.component';

describe('GroupDiscussionSkillsComponent', () => {
  let component: GroupDiscussionSkillsComponent;
  let fixture: ComponentFixture<GroupDiscussionSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupDiscussionSkillsComponent]
    });
    fixture = TestBed.createComponent(GroupDiscussionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
