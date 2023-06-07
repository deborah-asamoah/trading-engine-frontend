import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledTradesComponent } from './cancelled-trades.component';

describe('CancelledTradesComponent', () => {
  let component: CancelledTradesComponent;
  let fixture: ComponentFixture<CancelledTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelledTradesComponent]
    });
    fixture = TestBed.createComponent(CancelledTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
