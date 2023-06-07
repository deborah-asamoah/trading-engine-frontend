import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsListComponent } from './admin-clients-list.component';

describe('AdminClientsListComponent', () => {
  let component: AdminClientsListComponent;
  let fixture: ComponentFixture<AdminClientsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClientsListComponent]
    });
    fixture = TestBed.createComponent(AdminClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
