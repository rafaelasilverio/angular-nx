import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    docs: {toc: true},
    actions: { argTypesRegex: '^on [A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Dates$/,
      },
    },
  },
};

export default preview;
