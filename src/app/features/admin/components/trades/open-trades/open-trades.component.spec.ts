import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTradesComponent } from './open-trades.component';

describe('OpenTradesComponent', () => {
  let component: OpenTradesComponent;
  let fixture: ComponentFixture<OpenTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenTradesComponent]
    });
    fixture = TestBed.createComponent(OpenTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
