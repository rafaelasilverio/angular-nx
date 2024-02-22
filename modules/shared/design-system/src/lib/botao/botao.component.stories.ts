import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BotaoComponent } from './botao.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CommonModule } from '@angular/common';

const meta: Meta<BotaoComponent> = {
  component: BotaoComponent,
  title: 'BotaoComponent',
};
export default meta;
type Story = StoryObj<BotaoComponent>;

export const Primary: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    onClick: { action: 'clicked' }, // Captura e exibe a ação do botão
  },
};

export const Heading: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/botao works!/gi)).toBeTruthy();
  },
};
