"use client";

import { usePathname } from "next/navigation";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { footer, navItems } from "@/data/content";
import { site, whatsappLink } from "@/lib/site";
import { Container } from "@/styles/StylesUi";
import { Base, Column, Columns, Foot, FootLink, Links } from "./StylesFooter";

export const Footer = () => {
  const pathname = usePathname();
  const toSection = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <Foot>
      <Container>
        <Columns>
          <Column>
            <h2>{site.name}</h2>
            {footer.taglines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Column>
          <Column>
            <h2>Explore</h2>
            <Links>
              {navItems.map((item) => (
                <li key={item.href}>
                  <FootLink href={toSection(item.href)}>{item.label}</FootLink>
                </li>
              ))}
              <li>
                <FootLink href="/gallery">Photo tour</FootLink>
              </li>
            </Links>
          </Column>
          <Column>
            <h2>Contact</h2>
            <Links>
              <li>
                <FootLink href={`tel:${site.phoneTel}`}>
                  <Phone size={16} aria-hidden="true" />
                  {site.phoneDisplay}
                </FootLink>
              </li>
              <li>
                <FootLink href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp us
                </FootLink>
              </li>
              <li>
                <FootLink href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin size={16} aria-hidden="true" />
                  {site.location}
                </FootLink>
              </li>
            </Links>
          </Column>
        </Columns>
        <Base>
          <span>{footer.rights}</span>
          <span>Bookings by WhatsApp or phone</span>
        </Base>
      </Container>
    </Foot>
  );
};
