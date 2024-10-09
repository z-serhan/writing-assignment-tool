import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WritingComponent } from './writing/writing.component';

export const routes: Routes = [
    { path: 'assignments', component: AssignmentsComponent },
    { path: 'about', component: AboutComponent},
    { path: 'home', component: HomeComponent},
    { path: 'practice', component: WritingComponent},

];
