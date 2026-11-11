import "./globals.css";

export const metadata = {
  title: "Anup | Developer Portfolio",
  description: "Portfolio of Anup — Computer Science Engineering student and aspiring full-stack developer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
