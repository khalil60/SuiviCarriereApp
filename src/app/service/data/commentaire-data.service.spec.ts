import { TestBed } from '@angular/core/testing';

import { CommentaireDataService } from './commentaire-data.service';

describe('CommentaireDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentaireDataService = TestBed.get(CommentaireDataService);
    expect(service).toBeTruthy();
  });
});
