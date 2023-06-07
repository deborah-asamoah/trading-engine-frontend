import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedTradesComponent } from './closed-trades.component';

describe('ClosedTradesComponent', () => {
  let component: ClosedTradesComponent;
  let fixture: ComponentFixture<ClosedTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedTradesComponent]
    });
    fixture = TestBed.createComponent(ClosedTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
