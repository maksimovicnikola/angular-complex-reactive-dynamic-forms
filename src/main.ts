import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainFormComponent } from './main-form/main-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainFormComponent],
  template: `
    <app-main-form></app-main-form>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
