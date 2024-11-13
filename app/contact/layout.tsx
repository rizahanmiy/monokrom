export const metadata = {
  title: "Contact",
  description: "Reach us out",
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
