"use client";

import styled from "styled-components";

export const MapFrame = styled.div`
  overflow: hidden;
  height: 380px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.soft};

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    height: 260px;
  }
`;

export const Place = styled.p`
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.color.muted};
  line-height: 1.6;
`;

export const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  font-weight: 600;
  text-underline-offset: 3px;
`;
