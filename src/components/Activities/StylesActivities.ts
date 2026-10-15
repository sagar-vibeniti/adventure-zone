"use client";

import styled from "styled-components";

export const GroupTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 600;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: flex;
    margin-inline: -16px;
    padding: 0 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    flex: 0 0 46%;
    scroll-snap-align: start;
  }
`;

export const Photo = styled.button`
  position: relative;
  aspect-ratio: 1;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.soft};
  cursor: pointer;

  img {
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

export const CardTitle = styled.p`
  font-weight: 600;
`;

export const CardText = styled.p`
  margin-top: -6px;
  color: ${({ theme }) => theme.color.muted};
  font-size: 0.875rem;
`;
