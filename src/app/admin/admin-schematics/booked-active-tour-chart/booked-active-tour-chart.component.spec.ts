import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedActiveTourChartComponent } from './booked-active-tour-chart.component';

describe('BookedActiveTourChartComponent', () => {
  let component: BookedActiveTourChartComponent;
  let fixture: ComponentFixture<BookedActiveTourChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedActiveTourChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedActiveTourChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
