import type { Preview } from '@storybook/react';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
import '@auzmor-test/design-tokens/brand/learn/tokens.module.css';
//@ts-ignore
import learn from '!!style-loader?injectType=lazyStyleTag!css-loader!@auzmor-test/design-tokens/brand/learn/tokens.module.css';
//@ts-ignore
import office from '!!style-loader?injectType=lazyStyleTag!css-loader!@auzmor-test/design-tokens/brand/office/tokens.module.css';

const preview: Preview = {
  decorators: [cssVariablesTheme],
  parameters: {
    cssVariables: {
      files: {
        Learn: learn,
        Office: office
      },
      defaultTheme: 'Learn'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
