import type { Preview } from '@storybook/react';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';
// import '@shubh-test/design-tokens/brand/office/tokens.css';
import '@shubh-test/design-tokens/brand/learn/tokens.css';
// import learn from '!!style-loader?injectType=lazyStyleTag!css-loader!@shubh-test/design-tokens/brand/learn/tokens.css';
// import office from '!!style-loader?injectType=lazyStyleTag!css-loader!@shubh-test/design-tokens/brand/office/tokens.css';

const preview: Preview = {
  decorators: [cssVariablesTheme],
  parameters: {
    cssVariables: {
      files: {
        Learn: '',
        Office: ''
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
