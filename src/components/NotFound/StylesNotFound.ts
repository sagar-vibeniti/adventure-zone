"use client";

import styled from "styled-components";

export const Shell = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 96px 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.muted};
`;
