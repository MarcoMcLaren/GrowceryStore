import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-input',
  styleUrls: ['./simple-input.component.css'],
  template: `
  <input type="text" [(ngModel)]="title">
  <h2>{{title}}</h2>
`
})
export class SimpleInputComponent {
title: string[] = [];
}
