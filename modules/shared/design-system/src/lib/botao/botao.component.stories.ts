import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BotaoComponent } from './botao.component';
import { withActions } from '@storybook/addon-actions/decorator'

import { userEvent, within } from '@storybook/testing-library';
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
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    text: 'Click me!',
    variant: 'secondary'
  }
};
