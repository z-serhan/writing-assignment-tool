import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AssignmentsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'writing-assignment-tool';
}
