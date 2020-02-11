import { TestBed } from '@angular/core/testing';

import { ListEmployeeDataService } from './list-employee-data.service';

describe('ListEmployeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListEmployeeDataService = TestBed.get(ListEmployeeDataService);
    expect(service).toBeTruthy();
  });
});
