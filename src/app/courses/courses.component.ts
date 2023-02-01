import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  showList = false;

courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id:3, name: 'course3'}
]

loadCourses(){
  this.showList = !this.showList;
}
}
