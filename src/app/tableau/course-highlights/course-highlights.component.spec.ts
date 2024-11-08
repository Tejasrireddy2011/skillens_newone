import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHighlightsComponent } from './course-highlights.component';

describe('CourseHighlightsComponent', () => {
  let component: CourseHighlightsComponent;
  let fixture: ComponentFixture<CourseHighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseHighlightsComponent]
    });
    fixture = TestBed.createComponent(CourseHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
