import type { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: Theme["color"];
    font: Theme["font"];
    radius: Theme["radius"];
    shadow: Theme["shadow"];
    layout: Theme["layout"];
    media: Theme["media"];
  }
}
