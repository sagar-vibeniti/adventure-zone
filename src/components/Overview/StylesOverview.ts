"use client";

import styled from "styled-components";

export const Facts = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.ink};
`;

export const Badges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Badge = styled.a`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.md};
  text-decoration: none;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.875rem;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    color: ${({ theme }) => theme.color.ink};
    line-height: 1.6;
  }
`;

export const Quote = styled.blockquote`
  margin: 0;
  padding: 16px 20px;
  border-left: 3px solid ${({ theme }) => theme.color.brand};
  border-radius: 0 ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md} 0;
  background: ${({ theme }) => theme.color.brandSoft};
  font-size: 1.0625rem;
  font-weight: 600;
`;
