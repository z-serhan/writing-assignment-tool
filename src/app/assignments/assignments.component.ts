import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
/*   assignments = [
    { 
      title: 'Personal Narrative Essay', 
      due_date: '2024-10-12', 
      status: 'Pending', 
      description: 'Write a personal narrative reflecting on a significant life event.' 
    },
    { 
      title: 'Peer Review 1', 
      due_date: '2024-10-14', 
      status: 'In Progress', 
      description: 'Provide constructive feedback on your peer\'s essay draft.' 
    },
    { 
      title: 'Descriptive Essay', 
      due_date: '2024-10-17', 
      status: 'Pending', 
      description: 'Write an essay vividly describing a place or object of personal significance.' 
    },
    { 
      title: 'Argumentative Essay Outline', 
      due_date: '2024-10-20', 
      status: 'Pending', 
      description: 'Prepare an outline for your argumentative essay on a contemporary issue.' 
    },
    { 
      title: 'Grammar and Style Exercise', 
      due_date: '2024-10-10', 
      status: 'Completed', 
      description: 'Complete the exercise on grammar and sentence structure.' 
    },
    { 
      title: 'Rhetorical Analysis Essay', 
      due_date: '2024-11-01', 
      status: 'Pending', 
      description: 'Analyze the rhetorical strategies used in a persuasive text.' 
    },
    { 
      title: 'Annotated Bibliography', 
      due_date: '2024-11-05', 
      status: 'In Progress', 
      description: 'Compile an annotated bibliography of sources for your research paper.' 
    },
    { 
      title: 'Final Research Paper Draft', 
      due_date: '2024-11-15', 
      status: 'Pending', 
      description: 'Submit the first draft of your research paper for review.' 
    }
  ]; */

  assignments: Array<Assignment> = []
   
    constructor(private dataService: DataService) { }

    ngOnInit(): void {

      this.dataService.getAssignments().subscribe({
        next: (data) => {
          this.assignments = data;  // Update with actual data format
        },
        error: (error) => {
          console.error('Error fetching assignments', error);
        }
      });    
    }

}

interface Assignment {
  title: string;
  description: string;
  due_date: string;
  status: 'Pending' | 'In Progress' | 'Submitted';
}

