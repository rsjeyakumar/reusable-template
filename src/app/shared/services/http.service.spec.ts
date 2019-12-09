import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpService } from './http.service';

xdescribe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHeaders]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
