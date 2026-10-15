"use client";

import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 0 20px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    order: 2;
    padding: 20px 0 0;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.5rem, 2.6vw, 1.75rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
`;

export const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  color: ${({ theme }) => theme.color.ink};
  font-size: 0.9375rem;

  svg {
    color: ${({ theme }) => theme.color.brand};
  }
`;

export const Tags = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.9375rem;
`;

export const MapLink = styled.a`
  font-weight: 600;
  text-underline-offset: 3px;
`;

export const ShareButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 12px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.soft};
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;
