import type { Meta, StoryObj } from '@storybook/angular';
import { BotaoComponent } from './botao.component';

const meta: Meta<BotaoComponent> = {

  component: BotaoComponent,
  parameters: {
    // controls: { expanded: true },
    docs: {
      description: {
        component: 'Este é um componente de botao utilizado para disparar ações.'
      }
    },
    // argTypes: {
    //   texto: { control: 'text', },
    //   desabilitado: { control: 'boolean' },
    //   variante: { control: { type: 'select', options: ['primario', 'secundario'] } }
    // }
  }
};
export default meta;
type Story = StoryObj<BotaoComponent>;

export const Primario: Story = {
  args: {
    texto: 'Action',
    desabilitado: false,
    variante: 'primario',
    tema: 'azul'
  }
};

export const PrimarioDesabilitado: Story = {
  args: {
    ...Primario.args,
    desabilitado: true,
  }
}

export const Secundario: Story = {
  args: {
    ...Primario.args,
    variante: 'secundario',
  }
};

export const SecundarioDesabilitado: Story = {
  args: {
    ...Secundario.args,
    desabilitado: true,
  }
}

export const Terciario: Story = {
  args: {
    ...Primario.args,
    variante: 'terciario',
  }
};

export const TerciarioDesabilitado: Story = {
  args: {
    ...Terciario.args,
    desabilitado: true,
  }
};

export const PrimarioVioleta: Story = {
  args: {
    ...Primario.args,
    tema: 'violeta'
  }
};

export const PrimarioVioletaDesabilitado: Story = {
  args: {
    ...PrimarioVioleta.args,
    desabilitado: true
  }
};

export const SecundarioVioleta: Story = {
  args: {
    ...PrimarioVioleta.args,
    variante: 'secundario',
  }
};

export const SecundarioVioletaDesabilitado: Story = {
  args: {
    ...SecundarioVioleta.args,
    desabilitado: true,
  }
};

export const TerciarioVioleta: Story = {
  args: {
    ...PrimarioVioleta.args,
    variante: 'terciario',
  }
};

export const TerciarioVioletaDesabilitado: Story = {
  args: {
    ...TerciarioVioleta.args,
    desabilitado: true,
  }
};