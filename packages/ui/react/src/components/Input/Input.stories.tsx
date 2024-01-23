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
      <Input placeholder="Primary placeholder" />
      <Input variant="underline" placeholder="Underline Placeholder" />
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
      <Input placeholder="Primary placeholder" label="Primary Label" id="primary" />
      <Input
        variant="underline"
        placeholder="Underline Placeholder"
        label="Underline Label"
        id="underline"
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
