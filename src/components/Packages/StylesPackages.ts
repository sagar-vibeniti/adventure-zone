"use client";

import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: flex;
    margin-inline: -16px;
    padding: 4px 16px 8px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled.article<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      border-color: ${theme.color.ink};
      box-shadow: 0 0 0 1px ${theme.color.ink}, ${theme.shadow.card};
    `}

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    flex: 0 0 78%;
    scroll-snap-align: start;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Label = styled.h3`
  font-size: 1.0625rem;
  font-weight: 600;
`;

export const Price = styled.p`
  margin-top: 8px;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.875rem;
  }
`;

export const Includes = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9375rem;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.brand};
  }
`;

export const Extra = styled.span`
  font-weight: 600;
`;

export const RateCard = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  font-size: 0.9375rem;
  font-weight: 600;
  text-underline-offset: 3px;
`;
