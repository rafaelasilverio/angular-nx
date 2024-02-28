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
      text: { control: 'text' },
      disabled: { control: 'boolean' },
      variant: { control: { type: 'select', options: ['primary', 'secondary'] } }
    }
  }
};
export default meta;
type Story = StoryObj<BotaoComponent>;

export const Primary: Story = {
  args: {
    text: 'Action',
    disabled: false,
    variant: 'primary'
  }
};

export const PrimaryDisabled: Story = {
  args: {
    text: 'Action',
    disabled: true,
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    text: 'Action',
    disabled: false,
    variant: 'secondary'
  }
};

export const SecondaryDisabled: Story = {
  args: {
    text: 'Action',
    variant: 'secondary',
    disabled: true
  }
}