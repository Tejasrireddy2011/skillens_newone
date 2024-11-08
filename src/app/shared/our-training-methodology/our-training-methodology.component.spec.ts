import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTrainingMethodologyComponent } from './our-training-methodology.component';

describe('OurTrainingMethodologyComponent', () => {
  let component: OurTrainingMethodologyComponent;
  let fixture: ComponentFixture<OurTrainingMethodologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTrainingMethodologyComponent]
    });
    fixture = TestBed.createComponent(OurTrainingMethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
