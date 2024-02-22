import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myngapp-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css',
})
export class BotaoComponent {
  @Input() text = 'Click me!';
  @Input() padding = 10;
  @Input() disabled = true;
  @Output() onClick = new EventEmitter<void>();

  metodo() {
    this.onClick.emit();
    console.log('Fui clicado')
  }

}
