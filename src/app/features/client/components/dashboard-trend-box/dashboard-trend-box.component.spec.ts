import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrendBoxComponent } from './dashboard-trend-box.component';

describe('DashboardTrendBoxComponent', () => {
  let component: DashboardTrendBoxComponent;
  let fixture: ComponentFixture<DashboardTrendBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTrendBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTrendBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
