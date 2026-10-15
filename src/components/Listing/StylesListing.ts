"use client";

import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    #photos {
      order: 1;
    }
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 372px;
  gap: 80px;
  align-items: start;
  padding-top: 8px;

  @media (max-width: 1120px) {
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.media.md}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Main = styled.div`
  min-width: 0;
`;
