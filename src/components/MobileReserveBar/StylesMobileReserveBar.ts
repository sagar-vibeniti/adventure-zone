"use client";

import styled from "styled-components";

export const Bar = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.md}) {
    position: fixed;
    inset: auto 0 0;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 20px calc(12px + env(safe-area-inset-bottom));
    border-top: 1px solid ${({ theme }) => theme.color.line};
    background: #ffffff;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;

  strong {
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.8125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
