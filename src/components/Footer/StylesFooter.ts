"use client";

import styled from "styled-components";

export const Foot = styled.footer`
  margin-top: 48px;
  padding: 48px 0 32px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  background: ${({ theme }) => theme.color.soft};
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 0.9375rem;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.9375rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FootLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.ink};
  font-size: 0.9375rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.875rem;
`;
