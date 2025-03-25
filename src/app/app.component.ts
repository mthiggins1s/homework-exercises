import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FooterComponent } from './footer/footer.component';
import { CurrencyPipeComponent } from "./currency-pipe/currency-pipe.component";
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, FooterComponent, CurrencyPipeComponent, CardComponent],
  template: `
    <app-header></app-header>
    <app-user-input></app-user-input>
    <app-footer></app-footer>
    <app-currency-pipe></app-currency-pipe>
    <app-card></app-card>
  `
})
export class AppComponent {}