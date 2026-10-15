"use client";

import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Photo = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.soft};

  img {
    object-fit: cover;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    line-height: 1.6;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 999px;
    font-size: 0.875rem;
  }
`;
