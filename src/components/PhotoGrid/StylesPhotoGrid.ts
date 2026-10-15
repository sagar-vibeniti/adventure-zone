"use client";

import styled from "styled-components";
import Link from "next/link";

export const Wrap = styled.section`
  position: relative;
  scroll-margin-top: 96px;
`;

export const Mosaic = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  height: min(56vh, 520px);
  min-height: 360px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;

export const Tile = styled.button<{ $main?: boolean }>`
  position: relative;
  grid-row: ${({ $main }) => ($main ? "span 2" : "auto")};
  padding: 0;
  overflow: hidden;
  border: 0;
  background: ${({ theme }) => theme.color.soft};
  cursor: pointer;

  img {
    object-fit: cover;
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: brightness(0.88);
  }

  &:focus-visible {
    outline-offset: -4px;
    outline-color: #ffffff;
  }
`;

export const ShowAll = styled(Link)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.color.ink};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: #ffffff;
  color: ${({ theme }) => theme.color.ink};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow.soft};

  &:hover {
    background: ${({ theme }) => theme.color.soft};
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    right: 12px;
    bottom: 12px;
    min-height: 34px;
    border: 0;
    border-radius: 999px;
    background: rgba(34, 34, 34, 0.78);
    color: #ffffff;
    font-size: 0.8125rem;
  }
`;

export const Carousel = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: flex;
    margin-inline: -16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Slide = styled.button`
  position: relative;
  flex: 0 0 100%;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 0;
  background: ${({ theme }) => theme.color.soft};
  scroll-snap-align: start;
  cursor: pointer;

  img {
    object-fit: cover;
  }
`;

export const SlideCount = styled.span`
  position: absolute;
  left: 12px;
  bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(34, 34, 34, 0.78);
  color: #ffffff;
  font-size: 0.8125rem;
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;
