import { TestBed, inject } from '@angular/core/testing';

import { StudentDataFirestoreService } from './student-data-firestore.service';

describe('StudentDataFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDataFirestoreService]
    });
  });

  it('should be created', inject([StudentDataFirestoreService], (service: StudentDataFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
