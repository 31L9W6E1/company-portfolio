import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alpharifbta.mn"),
  title: {
    default: "ALPHA RIF BTA",
    template: "%s | ALPHA RIF BTA"
  },
  description:
    "Mongolian procurement, contracting, tender participation, and project delivery partner for government, mining, infrastructure, and enterprise clients."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
