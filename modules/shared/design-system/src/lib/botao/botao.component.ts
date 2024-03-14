import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type variantes = 'primary' | 'secondary' | 'tertiary';
type temas = '' | 'tema-violeta';

@Component({
  selector: 'myngapp-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css',
})
export class BotaoComponent {
  @Input() texto = '';
  @Input() desabilitado = false;
  @Input() variante: variantes = 'primary';
  @Input() tema: temas = '';

  obterVariante(variante: variantes, desabilitado: boolean, tema: temas): string {
    let classes = `${variante} ${tema}`;

    classes += desabilitado ? " disabled" : "";

    return classes;
  }
}
