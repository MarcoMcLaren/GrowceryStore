import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PanelComponent } from './panel/panel.component';
import { BudgetComponent } from './budget/budget.component';
import { SimpleInputComponent } from './simple-input/simple-input.component';
import { FormsModule } from '@angular/forms';
import { InputFormatDirective } from './Directives/input-format.directive';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        PanelComponent,
        BudgetComponent,
        SimpleInputComponent,
        InputFormatDirective,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule

    ]
})
export class AppModule { }
// declarations: [
//     AppComponent,
//     SimpleInputComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
