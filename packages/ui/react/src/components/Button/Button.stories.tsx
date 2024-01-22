import { Button } from './Button';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Design System/Button',
  component: Button
};
export const Variants: StoryFn<typeof Button> = () => {
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
