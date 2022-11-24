import { TestBed } from '@angular/core/testing';

import { GetWeatherDeatailsService } from './get-weather-deatails.service';

describe('GetWeatherDeatailsService', () => {
  let service: GetWeatherDeatailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWeatherDeatailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
