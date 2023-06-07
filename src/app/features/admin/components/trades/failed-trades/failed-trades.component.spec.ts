import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedTradesComponent } from './failed-trades.component';

describe('FailedTradesComponent', () => {
  let component: FailedTradesComponent;
  let fixture: ComponentFixture<FailedTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailedTradesComponent]
    });
    fixture = TestBed.createComponent(FailedTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
