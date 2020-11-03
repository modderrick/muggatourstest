import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCategoryFormComponent } from './tour-category-form.component';

describe('TourCategoryFormComponent', () => {
  let component: TourCategoryFormComponent;
  let fixture: ComponentFixture<TourCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCategoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
