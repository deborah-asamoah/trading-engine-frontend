import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrderBoxComponent } from './dashboard-order-box.component';

describe('DashboardOrderBoxComponent', () => {
  let component: DashboardOrderBoxComponent;
  let fixture: ComponentFixture<DashboardOrderBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOrderBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOrderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
