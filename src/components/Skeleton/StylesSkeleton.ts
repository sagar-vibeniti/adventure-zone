"use client";

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`;

export const Block = styled.div<{ $height: string; $width?: string }>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.lineSoft};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
`;
