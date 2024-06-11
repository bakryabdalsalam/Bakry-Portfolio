import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // Import Tajawal font
import "./globals.css";
import { ThemeProvider } from "./provider";

const tajawal = Tajawal({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "700", "800", "900"] // Specify available font weights
});

export const metadata: Metadata = {
  title: "Bakry Portfolio",
  description: "Modern & Minimalist Bakry Abdelsalam Portfolio",
  keywords: "Bakry, WordPress Developer, Portfolio, ووردبريس المطور, Bakry Abdelsalam, تطوير مواقعو, انشاء موقع, بكري عبدالسلام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/bakry.png" sizes="any" />
        <meta property="og:title" content="Bakry Portfolio" />
        <meta property="og:description" content="Modern & Minimalist Bakry Abdelsalam Portfolio" />
        <meta property="og:image" content="https://www.google.com/url?sa=i&url=https%3A%2F%2Feg.linkedin.com%2Fin%2Fbakryabdalsalam&psig=AOvVaw0_Jg6EgM-VJzi7Y4nVLky3&ust=1718187099361000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLij7e6n04YDFQAAAAAdAAAAABAE" />
        <meta property="og:url" content="https://bakry2.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={tajawal.className}> {/* Apply Tajawal font class */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
