import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true, // allows the component to exist independently without an NgModule
  selector: 'app-user-input',
  imports: [CommonModule, FormsModule, TitleCasePipe], // CommonModule provides Angular directives like @if. FormsModule enables two-way binding with [(ngModel)]. TitleCasePipe formats text to Title Case (e.g., "red apple" -> "Red Apple").
  template: `
    <form (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input id="name" [(ngModel)]="name" name="name" required />

      <label for="color">Favorite Color:</label>
      <input id="color" [(ngModel)]="favoriteColor" name="color" required />

      <button type="submit">Submit</button>
    </form>

    <p *ngIf="name && favoriteColor">
      Hello, <strong>{{ name }}</strong>! Your favorite color is 
      <span [style.color]="favoriteColor">{{ favoriteColor | titlecase }}</span>.
    </p>
    <p>Estimated Price: {{ 1500 | currency:'USD' }}</p>
  `,
  styles: [
    `form { display: flex; flex-direction: column; gap: 1rem; max-width: 300px; }`,
    `p { margin-top: 1rem; font-size: 1.2rem; }`
  ]
})
export class UserInputComponent {
  name = '';
  favoriteColor = '';


  onSubmit() {
    console.log(`Name: ${this.name}, Color: ${this.favoriteColor}`);
  }
}


// Notes about Dynamic Display and Two-Way Binding

  // Dynamic Display:
    // Uses @if to display content only when name and favoriteColor are set.

  // Two-Way Binding:
    // Synchronizes form input values with the name and favoriteColor variables.
