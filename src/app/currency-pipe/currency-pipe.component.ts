import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  imports: [CommonModule],
  templateUrl: './currency-pipe.component.html',
  styleUrl: './currency-pipe.component.css'
})
export class CurrencyPipeComponent {
  totalAmount: number = 2500;
}
