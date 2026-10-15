"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 96px;
    color-scheme: light;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.ink};
    font-family: ${({ theme }) => theme.font.body};
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, p, ul, ol, figure {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
  }

  button, input, select, textarea {
    font: inherit;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.ink};
    outline-offset: 2px;
  }

  #content:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.media.md}) {
    body {
      padding-bottom: calc(80px + env(safe-area-inset-bottom));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;
