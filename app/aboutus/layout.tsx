import type { Metadata } from "next";
import "/src/styles/globals.css";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who we are",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-jost">{children}</body>
    </html>
  );
}
