import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMarketBriefComponent } from './dashboard-market-brief.component';

describe('DashboardMarketBriefComponent', () => {
  let component: DashboardMarketBriefComponent;
  let fixture: ComponentFixture<DashboardMarketBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMarketBriefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMarketBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
