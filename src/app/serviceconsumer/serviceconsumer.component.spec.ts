import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceconsumerComponent } from './serviceconsumer.component';
import { MyServiceService } from '../my-service.service';

describe('ServiceconsumerComponent', () => {
  let component: ServiceconsumerComponent;
  let fixture: ComponentFixture<ServiceconsumerComponent>;
  let mockService: jasmine.SpyObj<MyServiceService>; 


  beforeEach(async () => {
    mockService = jasmine.createSpyObj('MyServiceService', ['getData']);
    mockService.getData.and.returnValue('Mocked Service Data');
    await TestBed.configureTestingModule({
      imports: [ServiceconsumerComponent],
      providers: [
        { provide: MyServiceService, useValue: mockService }  // Provide the mocked service
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data from Service', () => {
    expect(component.message).toBe('Mocked Service Data')
  });
});
