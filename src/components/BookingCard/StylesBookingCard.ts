"use client";

import styled from "styled-components";

export const Aside = styled.aside`
  position: relative;
  align-self: stretch;
  padding-top: 32px;
  scroll-margin-top: 96px;

  @media (max-width: ${({ theme }) => theme.media.md}) {
    padding: 32px 0;
    border-top: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const Card = styled.form`
  position: sticky;
  top: 104px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: ${({ theme }) => theme.media.md}) {
    position: static;
  }
`;

export const PriceLine = styled.p`
  strong {
    font-size: 1.375rem;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.color.ink};
  }
`;

export const Offer = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.accentSoft};
  color: #9a3a06;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border: 1px solid #b0b0b0;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const Field = styled.label<{ $wide?: boolean; $right?: boolean; $top?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};
  min-height: 56px;
  padding: 10px 12px;
  border-left: ${({ $right }) => ($right ? "1px solid #b0b0b0" : "0")};
  border-top: ${({ $top }) => ($top ? "0" : "1px solid #b0b0b0")};
  cursor: pointer;

  &:focus-within {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.ink};
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  input,
  select {
    width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 0.875rem;
    outline: none;
    cursor: pointer;
  }
`;

export const FieldLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const GuestRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  grid-column: 1 / -1;
  padding: 10px 12px;
  border-top: 1px solid #b0b0b0;
`;

export const GuestCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span:last-child {
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.8125rem;
  }
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  output {
    min-width: 24px;
    font-weight: 600;
    text-align: center;
  }
`;

export const StepButton = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  background: #ffffff;
  color: ${({ theme }) => theme.color.ink};
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.ink};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const Note = styled.p`
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.875rem;
  text-align: center;
`;

export const ErrorText = styled.p`
  color: #c13515;
  font-size: 0.875rem;
`;

export const Breakdown = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;

  div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  dt,
  dd {
    margin: 0;
  }

  dt {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Total = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  font-weight: 700;

  dt {
    text-decoration: none;
  }
`;

export const CallLine = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.875rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.color.ink};
    font-weight: 600;
    text-underline-offset: 3px;
  }
`;
