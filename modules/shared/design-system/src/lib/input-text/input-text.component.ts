import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myngapp-input-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
})
export class InputTextComponent {
  @Input() multilinha = false;
  //@Input() labelVisivel = false;

}
