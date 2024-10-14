import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceService]  // Provide the actual service here
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct data from getData', () => {
    spyOn(service, 'getData').and.returnValue('Mocked Service Data');  // Mock the method
    const data = service.getData();
    expect(data).toBe('Mocked Service Data');  // Verify it returns the mocked value
  });
});
