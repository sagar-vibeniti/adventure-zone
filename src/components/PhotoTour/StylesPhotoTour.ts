"use client";

import styled from "styled-components";
import Link from "next/link";

export const Page = styled.main`
  padding: 24px 0 48px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 12px 0 8px;
  margin-left: -8px;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.soft};
  }
`;

export const Heading = styled.h1`
  margin-top: 16px;
  font-size: clamp(1.5rem, 2.6vw, 1.75rem);
  font-weight: 600;
`;

export const Count = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.muted};
`;

export const Thumbs = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin: 28px 0 8px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: flex;
    margin-inline: -16px;
    padding: 0 16px;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Thumb = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    flex: 0 0 120px;
  }
`;

export const ThumbImage = styled.span`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.soft};

  img {
    object-fit: cover;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 32px;
  padding: 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  scroll-margin-top: 88px;

  &:last-of-type {
    border-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 28px 0;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 1.375rem;
  font-weight: 600;

  span {
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.9375rem;
    font-weight: 400;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

export const Photo = styled.button<{ $wide: boolean }>`
  position: relative;
  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};
  aspect-ratio: ${({ $wide }) => ($wide ? "16 / 10" : "4 / 3")};
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.soft};
  cursor: zoom-in;

  img {
    object-fit: cover;
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: brightness(0.9);
  }
`;

export const Empty = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.color.muted};
`;
