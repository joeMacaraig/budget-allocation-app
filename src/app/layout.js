import "./globals.css";

export const metadata = {
  title: "Budget Allocation",
  description: "Budget Allocation Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
