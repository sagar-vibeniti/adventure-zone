"use client";

import { Compass } from "lucide-react";
import { notFoundCopy } from "@/data/content";
import { ButtonLink, Container } from "@/styles/StylesUi";
import { Shell, Text, Title } from "./StylesNotFound";

export const NotFoundView = () => (
  <Container>
    <Shell>
      <Compass size={40} strokeWidth={1.5} aria-hidden="true" />
      <Title>{notFoundCopy.title}</Title>
      <Text>{notFoundCopy.text}</Text>
      <ButtonLink href="/" $tone="dark">
        {notFoundCopy.home}
      </ButtonLink>
    </Shell>
  </Container>
);
