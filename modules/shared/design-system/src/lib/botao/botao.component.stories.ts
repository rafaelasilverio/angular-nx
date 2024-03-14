import { Meta, StoryObj } from '@storybook/angular';
import { BotaoComponent } from './botao.component';

const meta: Meta<BotaoComponent> = {
  title: 'Botão',
  tags: ['autodocs'],
  component: BotaoComponent,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Este é um componente de botão utilizado para disparar ações.'
      }
    },
    argTypes: {
      texto: { control: 'text', },
      desabilitado: { control: 'boolean' },
      variante: { control: { type: 'select', options: ['primario', 'secundario'] } }
    }
  }
};
export default meta;
type Story = StoryObj<BotaoComponent>;

export const Primario: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primario',
    tema: ''
  }
};

export const PrimarioDesabilitado: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'primario',
  }
}

export const Secundario: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'secundario',
  }
};

export const SecundarioDesabilitado: Story = {
  args: {
    texto: 'Action',
    variante: 'secundario',
    desabilitado: true,
  }
}

export const Terciario: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'terciario',
  }
};

export const TerciarioDesabilitado: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'terciario',
  }
};

export const PrimarioVioleta: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primario',
    tema: 'tema-violeta'
  }
};

export const PrimarioVioletaDesabilitado: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'primario',
    tema: 'tema-violeta'
  }
};

export const SecundarioVioleta: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'secundario',
    tema: 'tema-violeta'
  }
};

export const SecundarioVioletaDesabilitado: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'secundario',
    tema: 'tema-violeta'
  }
};

export const TerciarioVioleta: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'terciario',
    tema: 'tema-violeta'
  }
};

export const TerciarioVioletaDesabilitado: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'terciario',
    tema: 'tema-violeta'
  }
};
