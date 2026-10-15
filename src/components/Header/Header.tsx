"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone, TreePine } from "lucide-react";
import { navItems } from "@/data/content";
import { site, whatsappLink } from "@/lib/site";
import { Container } from "@/styles/StylesUi";
import { Actions, Bar, BookLink, Inner, Logo, LogoMark, LogoText, Nav, NavLink, PhoneLink, SkipLink, WhatsAppLink } from "./StylesHeader";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toSection = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <Bar>
      <SkipLink href="#content">Skip to content</SkipLink>
      <Container>
        <Inner>
          <Logo href="/" aria-label={`${site.name} home`}>
            <LogoMark>
              <TreePine size={20} aria-hidden="true" />
            </LogoMark>
            <LogoText>
              <strong>{site.name}</strong>
              <small>{site.location}</small>
            </LogoText>
          </Logo>
          <Nav aria-label="Sections">
            {navItems.map((item) => (
              <NavLink key={item.href} href={toSection(item.href)}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <Actions>
            <PhoneLink href={`tel:${site.phoneTel}`} aria-label={`Call ${site.phoneDisplay}`}>
              <Phone size={18} aria-hidden="true" />
              <span>{site.phoneDisplay}</span>
            </PhoneLink>
            <WhatsAppLink href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <MessageCircle size={18} aria-hidden="true" />
              <span>WhatsApp</span>
            </WhatsAppLink>
            <BookLink href={toSection("#book")}>Book now</BookLink>
          </Actions>
        </Inner>
      </Container>
    </Bar>
  );
};
