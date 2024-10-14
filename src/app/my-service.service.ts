import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

    // Example method that returns data
    getData(): string {
      return 'Hello from MyService';
    }
}
