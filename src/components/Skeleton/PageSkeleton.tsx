"use client";

import { Container, VisuallyHidden } from "@/styles/StylesUi";
import { Block, Stack } from "./StylesSkeleton";

export const PageSkeleton = () => (
  <Container>
    <Stack role="status" aria-live="polite">
      <VisuallyHidden>Loading photos</VisuallyHidden>
      <Block $height="32px" $width="min(520px, 80%)" />
      <Block $height="18px" $width="min(360px, 60%)" />
      <Block $height="min(56vh, 520px)" />
    </Stack>
  </Container>
);
