import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStockListComponent } from './portfolio-stock-list.component';

describe('PortfolioStockListComponent', () => {
  let component: PortfolioStockListComponent;
  let fixture: ComponentFixture<PortfolioStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioStockListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
