import { TestBed } from '@angular/core/testing';

import { DataSharingService } from './datasharing.service';

describe('DatasharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSharingService = TestBed.get(DataSharingService);
    expect(service).toBeTruthy();
  });
});
