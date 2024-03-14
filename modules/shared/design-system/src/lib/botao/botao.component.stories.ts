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
      variante: { control: { type: 'select', options: ['primary', 'secondary'] } }
    }
  }
};
export default meta;
type Story = StoryObj<BotaoComponent>;

export const Primary: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primary',
    tema: ''
  }
};

export const PrimaryDisabled: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'primary',
  }
}

export const Secondary: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'secondary',
  }
};

export const SecondaryDisabled: Story = {
  args: {
    texto: 'Action',
    variante: 'secondary',
    desabilitado: true,
  }
}

export const Tertiary: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'tertiary',
  }
};

export const TertiaryDisabled: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'tertiary',
  }
};

export const PrimaryViolet: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primary',
    tema: 'tema-violeta'
  }
};

export const PrimaryVioletDisabled: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'primary',
    tema: 'tema-violeta'
  }
};

export const SecondaryViolet: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'secondary',
    tema: 'tema-violeta'
  }
};

export const SecondaryVioletDisabled: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'secondary',
    tema: 'tema-violeta'
  }
};

export const TertiaryViolet: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'tertiary',
    tema: 'tema-violeta'
  }
};

export const TertiaryVioletDisabled: Story = {
  args: {
    texto: 'Action',
    desabilitado: true,
    variante: 'tertiary',
    tema: 'tema-violeta'
  }
};
