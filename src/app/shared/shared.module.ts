import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component'; // Import the standalone component
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  imports: [CommonModule, HeaderComponent, FooterComponent], // ✅ Import standalone component here
  exports: [HeaderComponent] // ✅ Export so it can be used elsewhere
})
export class SharedModule {}
