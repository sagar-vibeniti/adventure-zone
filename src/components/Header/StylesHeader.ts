"use client";

import styled from "styled-components";
import Link from "next/link";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid ${({ theme }) => theme.color.lineSoft};
  backdrop-filter: saturate(180%) blur(12px);
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 76px;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    height: 64px;
  }
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.color.brand};
  text-decoration: none;
`;

export const LogoMark = styled.span`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.brand};
  color: #ffffff;
`;

export const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;

  strong {
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  small {
    color: ${({ theme }) => theme.color.muted};
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 999px;
  box-shadow: ${({ theme }) => theme.shadow.soft};

  @media (max-width: ${({ theme }) => theme.media.md}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  padding: 8px 14px;
  border-radius: 999px;
  color: ${({ theme }) => theme.color.ink};
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.soft};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 999px;
  color: ${({ theme }) => theme.color.ink};
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.soft};
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    width: 44px;
    padding: 0;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.color.line};

    span {
      display: none;
    }
  }
`;

export const WhatsAppLink = styled(PhoneLink)`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: inline-flex;
  }
`;

export const BookLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.brand};
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.brandDark};
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -60px;
  left: 16px;
  z-index: 100;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.ink};
  color: #ffffff;
  text-decoration: none;

  &:focus {
    top: 12px;
  }
`;
