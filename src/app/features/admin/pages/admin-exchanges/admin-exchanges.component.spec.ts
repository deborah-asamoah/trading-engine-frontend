import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExchangesComponent } from './admin-exchanges.component';

describe('AdminExchangesComponent', () => {
  let component: AdminExchangesComponent;
  let fixture: ComponentFixture<AdminExchangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExchangesComponent]
    });
    fixture = TestBed.createComponent(AdminExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
