import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { StyledComponentsRegistry } from "@/components/registry/StyledComponentsRegistry";
import { lodgingJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { GlobalStyles } from "@/styles/GlobalStyles";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Adventure Zone | Jungle Cottage Stay & Adventure Packages in Dandeli",
    template: "%s | Adventure Zone, Dandeli",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: "Adventure Zone | Jungle Cottage Stay in Dandeli",
    description: site.description,
    images: ["/gallery/photo-11.jpg"],
    locale: "en_IN",
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={body.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd).replace(/</g, "\\u003c") }} />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <div id="content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
