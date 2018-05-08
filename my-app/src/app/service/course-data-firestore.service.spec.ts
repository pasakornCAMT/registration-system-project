import { TestBed, inject } from '@angular/core/testing';

import { CourseDataFirestoreService } from './course-data-firestore.service';

describe('CourseDataFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDataFirestoreService]
    });
  });

  it('should be created', inject([CourseDataFirestoreService], (service: CourseDataFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
