import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTourCategoryComponent } from './add-tour-category.component';

describe('AddTourCategoryComponent', () => {
  let component: AddTourCategoryComponent;
  let fixture: ComponentFixture<AddTourCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTourCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTourCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
