import React from 'react';
import { Button } from './Button';
import type { StoryFn } from '@storybook/react';
import useTheme from '../../hooks/useTheme';

export default {
  title: 'Design System/Button',
  component: Button
};
export const Variants: StoryFn<typeof Button> = () => {
  useTheme({ primaryColor: 'blue' });
  return (
    <>
      <Button>Primary</Button>
      <Button variant="outline">Secondary</Button>
    </>
  );
};

Variants.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        gap: '4px'
      }}>
      <Story />
    </div>
  )
];
