import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledTradesComponent } from './filled-trades.component';

describe('FilledTradesComponent', () => {
  let component: FilledTradesComponent;
  let fixture: ComponentFixture<FilledTradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledTradesComponent]
    });
    fixture = TestBed.createComponent(FilledTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
