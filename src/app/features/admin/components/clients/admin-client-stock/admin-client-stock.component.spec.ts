import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientStockComponent } from './admin-client-stock.component';

describe('AdminClientStockComponent', () => {
  let component: AdminClientStockComponent;
  let fixture: ComponentFixture<AdminClientStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClientStockComponent]
    });
    fixture = TestBed.createComponent(AdminClientStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
