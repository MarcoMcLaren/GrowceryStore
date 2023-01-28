import{Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor='let course of courses'>{{course}}</li>
    </ul>
    `
    
})

export class CoursesComponent{
title = 'List of Courses';
courses = ["course1", "course2", "course3"];
//Ons het hierso n array gemaak van courses in ons Full-Stack project met .NET Core
//sou ons hierdie waardes in n databasis gesit het
//gebruik HTTP SERVICE na .NET Core
}