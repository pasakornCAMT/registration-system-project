import { TestBed, inject } from '@angular/core/testing';

import { TeacherDataFirestoreService } from './teacher-data-firestore.service';

describe('TeacherDataFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherDataFirestoreService]
    });
  });

  it('should be created', inject([TeacherDataFirestoreService], (service: TeacherDataFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
