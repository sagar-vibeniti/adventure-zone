"use client";

import styled from "styled-components";

export const List = styled.ul<{ $columns: 1 | 2 | 3 }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  gap: ${({ $columns }) => ($columns === 1 ? "24px" : "18px 24px")};

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: ${({ $columns }) => ($columns === 1 ? "1fr" : "repeat(2, minmax(0, 1fr))")};
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const Row = styled.li<{ $hasText: boolean }>`
  display: flex;
  align-items: ${({ $hasText }) => ($hasText ? "flex-start" : "center")};
  gap: 16px;

  svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.ink};
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.span<{ $strong: boolean }>`
  font-size: 1rem;
  font-weight: ${({ $strong }) => ($strong ? 600 : 400)};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.875rem;
`;
