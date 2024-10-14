import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-serviceconsumer',
  standalone: true,
  imports: [],
  templateUrl: './serviceconsumer.component.html',
  styleUrl: './serviceconsumer.component.css'
})
export class ServiceconsumerComponent {
  message: string = '';

  constructor(private myService: MyServiceService) {}

  ngOnInit(): void {
    this.message = this.myService.getData();
  }
}
