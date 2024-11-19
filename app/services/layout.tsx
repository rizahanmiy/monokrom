export const metadata = {
  title: "Services",
  description: "Our Services",
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
