import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
courses = ["course1", "course2", "course3"];

onSave(){
  console.log(this.courses);
}
}
