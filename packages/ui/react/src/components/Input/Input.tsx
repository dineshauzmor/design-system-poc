import React from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import styled from 'styled-components';

export const Input = forwardRef(
  (
    {
      variant = 'primary',
      className,
      label,
      placeholder,
      ...rest
    }: {
      variant?: string;
      className?: string;
      placeholder?: string;
      label?: string;
    },
    ref
  ) => (
    <InputWrapper>
      {label ? <StyledLabel htmlFor="input-id">{label} </StyledLabel> : ''}
      <StyledInput
        id="input-id"
        placeholder={placeholder}
        variant={variant}
        {...rest}
        ref={ref}
        className={clsx(className)}
      />
    </InputWrapper>
  )
);

Input.displayName = 'Input';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledLabel = styled.label`
  font: var(--textBaseFontMedium);
  cursor: pointer;
`;

const StyledInput = styled.input<{ variant: string }>`
  border-radius: ${({ variant }) =>
    variant === 'underline' ? 'var(--borderRadius2)' : 'var(--borderRadius1)'};
  &&:focus {
    outline: 0px;
    ${({ variant }) =>
      variant === 'underline'
        ? `
      border: 0px;
      border-bottom: 2px solid var(--colorsPrimary950);
      color: var(--colorsPrimary950);
      `
        : `border: 2px solid var(--colorsPrimary950);
      color: var(--colorsPrimary950);
      `};
  }
  ${({ variant }) =>
    variant === 'underline'
      ? `
    border: 0px;
      border-bottom: 1px solid var(--colorsBaseNeutral200)`
      : 'border: 1px solid var(--colorsBaseNeutral300)'};
  color: var(--colorsBaseNeutral900);
  font: var(--textBaseFontMedium);
  padding: var(--space0);
  cursor: pointer;
`;
