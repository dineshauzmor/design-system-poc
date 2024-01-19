import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const Button = forwardRef(
  (
    {
      children,
      variant = 'outline',
      className,
      ...rest
    }: { children: React.ReactNode; variant: string; className: string },
    ref
  ) => (
    <StyledButton variant={variant} ref={ref} className={clsx(className)} {...rest}>
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
  border: ${({ variant }) => (variant === 'outline' ? '1px solid #000' : 'none')};
  color: var(--colorsBaseWhite);
  font: var(--textBaseFontMedium);
  cursor: pointer;
`;
