import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTradesComponent } from './complete-trades.component';

describe('CompleteTradesComponent', () => {
  let component: CompleteTradesComponent;
  let fixture: ComponentFixture<CompleteTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTradesComponent]
    });
    fixture = TestBed.createComponent(CompleteTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
