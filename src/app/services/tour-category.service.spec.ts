import { TestBed } from '@angular/core/testing';

import { TourCategoryService } from './tour-category.service';

describe('TourCategoryService', () => {
  let service: TourCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
