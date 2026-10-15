"use client";

import styled from "styled-components";

export const Frame = styled.dialog`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: ${({ theme }) => theme.color.overlay};
  color: #ffffff;

  &::backdrop {
    background: ${({ theme }) => theme.color.overlay};
  }

  &[open] {
    display: flex;
    flex-direction: column;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 44px;
  min-height: 44px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  &:focus-visible {
    outline-color: #ffffff;
  }
`;

export const Spacer = styled.span`
  width: 88px;
`;

export const Counter = styled.p`
  font-size: 0.9375rem;
  font-weight: 600;
`;

export const Stage = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 20px;
  min-height: 0;
`;

export const ImageBox = styled.div`
  position: relative;
  width: min(1080px, 100%);
  height: 100%;
  max-height: calc(100vh - 170px);
`;

export const NavButton = styled(IconButton)`
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  padding: 0;
  background: #ffffff;
  color: ${({ theme }) => theme.color.ink};

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;

export const Caption = styled.p`
  padding: 16px 20px 24px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.9375rem;
  text-align: center;
`;
