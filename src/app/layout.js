import "./globals.css";

export const metadata = {
  title: "Hey!",
  description: "A little about me with a secret message ;) ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
