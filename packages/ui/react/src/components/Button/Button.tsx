import React, { ForwardedRef } from 'react';
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
    ref: ForwardedRef<HTMLButtonElement>
  ) => (
    <StyledButton variant={variant} {...rest} ref={ref} className={clsx(className)}>
      {children}
    </StyledButton>
  )
);

Button.displayName = 'Button';

const StyledButton = styled.button<{ variant: string }>`
  background-color: ${({ variant }) =>
    variant !== 'outline' ? `var(--colorsPrimary500)` : 'none'};
  border-radius: var(--borderRadius1);
  font: var(--textBaseFontMedium);
  border: ${({ variant }) =>
    variant === 'outline' ? '1px solid var(--colorsPrimary500)' : 'none'};
  color: ${({ variant }) =>
    variant !== 'outline' ? 'var(--colorsBaseNeutral100)' : 'var(--colorsPrimary500)'};
  font: var(--textBaseFontMedium);
  padding: var(--space0) var(--space1);
  cursor: pointer;
`;
