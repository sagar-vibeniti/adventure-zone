"use client";

import { useState, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

type StyledComponentsRegistryProps = {
  children: ReactNode;
};

export const StyledComponentsRegistry = ({ children }: StyledComponentsRegistryProps) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const themed = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (typeof window !== "undefined") return themed;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{themed}</StyleSheetManager>;
};
