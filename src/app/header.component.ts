import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header>
      <h1>My Angular App</h1>
      <p>Made by: Matthew</p>
    </header>
  `,
  styles: [
    `header { text-align: center; margin: 1rem 0; }`,
    `h1 { font-size: 1.5rem; color: #333; }`
  ]
})
export class HeaderComponent {}