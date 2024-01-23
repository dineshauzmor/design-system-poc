import React from 'react';
import { Text } from './Text';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Design System/Text',
  component: Text
};

export const AllTexts: StoryFn<typeof Text> = () => {
  return (
    <>
      <Text size="2xs">Extra extra small text</Text>
      <Text size="xs">Extra small text</Text>
      <Text size="s">Small text</Text>
      <Text>Normal text</Text>
      <Text size="lg">Large text</Text>
      <Text size="4xl">Very large text</Text>
      <Text size="2xs" weight="normal">
        Normal weight Extra extra small text
      </Text>
      <Text size="xs" weight="medium">
        Medium weight Extra small text
      </Text>
      <Text size="s" weight="semibold">
        Semibold weight Small text
      </Text>
      <Text weight="bold">Bold weight Normal Text</Text>
      <Text weight="extrabold">Extra Bold weight Normal Text</Text>
      <Text variant="primary">Primary Text</Text>
      <Text variant="secondary">Secondary Text</Text>
      <Text variant="brand">Brand Text</Text>
    </>
  );
};

AllTexts.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
      <Story />
    </div>
  )
];
