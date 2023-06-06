import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeadingComponent } from './portfolio-heading.component';

describe('PortfolioHeadingComponent', () => {
  let component: PortfolioHeadingComponent;
  let fixture: ComponentFixture<PortfolioHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
