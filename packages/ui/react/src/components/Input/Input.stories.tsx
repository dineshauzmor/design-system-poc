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
      <Input placeholder="Primary Input" />
      <Input variant="underline" placeholder="Underline Input" />
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
      <Input placeholder="Placeholder" label="Primary Input" id="primary" />
      <Input variant="underline" placeholder="Placeholder" label="Underline Input" id="underline" />
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
