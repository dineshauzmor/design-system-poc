import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const Text = forwardRef(
  (
    {
      children,
      size = 'base',
      weight,
      variant = 'primary',
      className,
      as = 'span',
      ...rest
    }: {
      children: React.ReactNode;
      size?: string;
      weight?: string;
      variant?: string;
      className?: string;
      as?: string;
    },
    ref
  ) => (
    <StyledText
      as={as}
      ref={ref}
      {...rest}
      className={className}
      variant={variant}
      size={size}
      weight={weight}>
      {children}
    </StyledText>
  )
);

Text.displayName = 'Text';

const StyledText = styled.span<{ variant: string; size: string; weight: string }>`
  ${({ size }) => `
        ${size === '4xl' && 'font-size : var(--fontSize8)'};
        ${size === 'lg' && 'font-size : var(--fontSize5)'};
        ${size === 'base' && 'font-size : var(--fontSize4)'};
        ${size === 's' && 'font-size : var(--fontSize2)'};
        ${size === 'xs' && 'font-size : var(--fontSize1)'};
        ${size === '2xs' && 'font-size : var(--fontSize0)'};
    `};
  ${({ weight }) => `
        ${weight === 'normal' && 'font-weight : var(--fontWeights0)'};
        ${weight === 'medium' && 'font-weight : var(--fontWeights1)'};
        ${weight === 'semibold' && 'font-weight : var(--fontWeights2)'};
        ${weight === 'bold' && 'font-weight : var(--fontWeights3)'};
        ${weight === 'extrabold' && 'font-weight : var(--fontWeights4)'};
    `};
  ${({ variant }) => `
        ${variant === 'primary' && 'color : var(--colorsBaseNeutral900)'};
        ${variant === 'secondary' && 'color : var(--colorsBaseNeutral500)'};
        ${variant === 'brand' && 'color : var(--colorsPrimary950)'};
    `};
`;
