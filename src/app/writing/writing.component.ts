import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.css'
})
export class WritingComponent {
  // Boolean to control whether the writing text box is shown
  isWriting = false;

  // Method to toggle writing mode
  toggleWritingMode() {
    this.isWriting = !this.isWriting;
  }
}
