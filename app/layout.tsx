import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Acme</title>
      <meta
        name="description"
        content="The right place to calculate and have prospections of your invoices."
      />
      <meta property="og:title" content="Acme" />
      <meta property="og:description" content="Finances App" />
      <meta property="og:image" content="./app/ui/acme-logo" />
      <meta name="keywords" content="payments, invoices, money" />
      <link rel="icon" href="./app/ui/acme-logo" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
