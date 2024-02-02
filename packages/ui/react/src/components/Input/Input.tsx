import React, { ForwardedRef } from 'react';
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
      id,
      ...rest
    }: {
      variant?: string;
      className?: string;
      placeholder?: string;
      label?: string;
      id?: string;
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <InputWrapper>
      {label ? <StyledLabel htmlFor={id}>{label} </StyledLabel> : ''}
      <StyledInput
        id={id}
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
  padding: var(--space2) var(--space3);
  font-size: var(--fontSize2);
  color: var(--colorsBaseNeutral300);
  &&:focus {
    outline: 0px;
    ${({ variant }) =>
      variant === 'underline'
        ? `
      border: 0px;
      border-bottom: 1px solid var(--colorsPrimary950);
      color: var(--colorsBaseNeutral900);
      `
        : `border: 1px solid var(--colorsPrimary950);
      color: var(--colorsBaseNeutral900);
      `};
  }
  ${({ variant }) =>
    variant === 'underline'
      ? `
      border: 0px;
      border-bottom: 1px solid var(--colorsBaseNeutral200);
      border-radius: var(--borderRadius2);
      padding: var(--space2) 0;
    `
      : `
      border: 1px solid var(--colorsBaseNeutral200);
      border-radius: var(--borderRadius0)
      `};
`;
