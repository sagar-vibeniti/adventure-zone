"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: min(${({ theme }) => theme.layout.max}, calc(100% - 48px));
  margin-inline: auto;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    width: calc(100% - 32px);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

export const SectionLead = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.color.muted};
`;

export const ListingSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  scroll-margin-top: 96px;

  &:last-child {
    border-bottom: 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.hr`
  margin: 0;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

type ButtonTone = "primary" | "dark" | "outline" | "plain";

const buttonStyles = css<{ $tone: ButtonTone; $full?: boolean; $size?: "md" | "lg" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $full }) => ($full ? "100%" : "auto")};
  min-height: ${({ $size }) => ($size === "lg" ? "52px" : "44px")};
  padding: 0 ${({ $size }) => ($size === "lg" ? "24px" : "16px")};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ $size }) => ($size === "lg" ? "1rem" : "0.9375rem")};
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.1s ease;

  &:active {
    transform: scale(0.98);
  }

  ${({ $tone, theme }) =>
    $tone === "primary" &&
    css`
      background: linear-gradient(90deg, ${theme.color.brand}, #23946a);
      color: #ffffff;

      &:hover {
        background: ${theme.color.brandDark};
      }
    `}

  ${({ $tone, theme }) =>
    $tone === "dark" &&
    css`
      background: ${theme.color.ink};
      color: #ffffff;

      &:hover {
        background: #000000;
      }
    `}

  ${({ $tone, theme }) =>
    $tone === "outline" &&
    css`
      background: ${theme.color.surface};
      color: ${theme.color.ink};
      border-color: ${theme.color.ink};

      &:hover {
        background: ${theme.color.soft};
      }
    `}

  ${({ $tone, theme }) =>
    $tone === "plain" &&
    css`
      background: transparent;
      color: ${theme.color.ink};
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        background: ${theme.color.soft};
      }
    `}
`;

export const ButtonLink = styled.a<{ $tone: ButtonTone; $full?: boolean; $size?: "md" | "lg" }>`
  ${buttonStyles}
`;

export const Button = styled.button<{ $tone: ButtonTone; $full?: boolean; $size?: "md" | "lg" }>`
  ${buttonStyles}
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
