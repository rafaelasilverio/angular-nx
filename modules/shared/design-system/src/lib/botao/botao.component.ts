import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type variantes = 'primario' | 'secundario' | 'terciario';
type temas = 'azul' | 'violeta';

@Component({
  selector: 'myngapp-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css',
})
export class BotaoComponent {
  /**
   * Texto botão
   */
  @Input() texto = '';
  @Input() desabilitado = false;
  @Input() variante: variantes = 'primario';
  @Input() tema: temas = 'azul';

  obterVariante(variante: variantes, desabilitado: boolean, tema: temas): string {
    let classes = `${variante} ${tema}`;

    classes += desabilitado ? " disabled" : "";

    return classes;
  }
}
