export const theme = {
  color: {
    ink: "#222222",
    muted: "#6a6a6a",
    faint: "#929292",
    line: "#dddddd",
    lineSoft: "#ebebeb",
    surface: "#ffffff",
    soft: "#f7f7f7",
    brand: "#1d7a55",
    brandDark: "#145c3f",
    brandSoft: "#e8f4ee",
    accent: "#e8590c",
    accentSoft: "#fff1e8",
    overlay: "rgba(0, 0, 0, 0.92)",
  },
  font: {
    body: 'var(--font-body), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  shadow: {
    card: "0 6px 16px rgba(0, 0, 0, 0.12)",
    soft: "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  layout: {
    max: "1120px",
  },
  media: {
    md: "950px",
    sm: "744px",
  },
};

export type Theme = typeof theme;
