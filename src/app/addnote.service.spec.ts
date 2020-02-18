import { TestBed } from '@angular/core/testing';

import { AddnoteService } from './addnote.service';

describe('AddnoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddnoteService = TestBed.get(AddnoteService);
    expect(service).toBeTruthy();
  });
});
