export const metadata = {
  title: "Portfolio",
  description: "Our Works",
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
