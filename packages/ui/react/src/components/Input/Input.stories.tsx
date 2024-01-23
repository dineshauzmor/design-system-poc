import React from 'react';
import { Input } from './Input';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Design System/Input',
  component: Input
};
export const WithoutLabel: StoryFn<typeof Input> = () => {
  return (
    <>
      <Input placeholder="Custom Primary placeholder" />
      <Input variant="underline" placeholder="Custom Underline Placeholder" />
    </>
  );
};

WithoutLabel.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        gap: '8px'
      }}>
      <Story />
    </div>
  )
];

export const WithLabel: StoryFn<typeof Input> = () => {
  return (
    <>
      <Input placeholder="Custom Primary placeholder" label="Custom Primary Label" />
      <Input
        variant="underline"
        placeholder="Custom Underline Placeholder"
        label="Custom Underline Label"
      />
    </>
  );
};

WithLabel.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        gap: '8px'
      }}>
      <Story />
    </div>
  )
];
