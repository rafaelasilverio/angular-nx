import type { Meta, StoryObj } from '@storybook/angular';
import { InputTextComponent } from './input-text.component';

const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  parameters: {
    docs: {
      description: {
        component: 'Este é um componente de input.'
      }
    },

  }
};
export default meta;
type Story = StoryObj<InputTextComponent>;

export const Primario: Story = {
  args: {
    multilinha: false,
  },
};

export const PrimarioMultilinha: Story = {
  args: {
    multilinha: true,
  },
};
