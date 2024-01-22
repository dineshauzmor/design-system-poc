import React from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      className,
      ...rest
    }: { children: React.ReactNode; variant?: string; className?: string },
    ref
  ) => (
    <StyledButton variant={variant} {...rest} ref={ref} className={clsx(className)}>
      {children}
    </StyledButton>
  )
);

Button.displayName = 'Button';

const StyledButton = styled.button<{ variant: string }>`
  background-color: ${({ variant }) =>
    variant !== 'outline' ? `var(--colorsPrimary950)` : 'none'};
  border-radius: var(--aldo2);
  font: var(--textBaseFontMedium);
  border: ${({ variant }) =>
    variant === 'outline' ? '1px solid var(--colorsPrimary950)' : 'none'};
  color: ${({ variant }) =>
    variant !== 'outline' ? 'var(--colorsBaseWhite)' : 'var(--colorsPrimary950)'};
  font: var(--textBaseFontMedium);
  padding: 5px 10px;
  cursor: pointer;
`;
