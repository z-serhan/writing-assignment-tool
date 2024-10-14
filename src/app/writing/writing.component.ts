import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.css'
})
export class WritingComponent {
  essay = "initial line";
}
