import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusToCorporateComponent } from './campus-to-corporate.component';

describe('CampusToCorporateComponent', () => {
  let component: CampusToCorporateComponent;
  let fixture: ComponentFixture<CampusToCorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusToCorporateComponent]
    });
    fixture = TestBed.createComponent(CampusToCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
