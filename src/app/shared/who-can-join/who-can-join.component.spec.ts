import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanJoinComponent } from './who-can-join.component';

describe('WhoCanJoinComponent', () => {
  let component: WhoCanJoinComponent;
  let fixture: ComponentFixture<WhoCanJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoCanJoinComponent]
    });
    fixture = TestBed.createComponent(WhoCanJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
