import { headers } from "next/headers";
import "./globals.css";


export const metadata = {
  title: "Ermia Codev",
  description: "Ermia Codev: DataScience & DevOps Tutorial",
};

export default async function RootLayout({ children }) {
  const hs = await headers()
  const lang = hs.get("X-lang")

  return (
    <html data-theme="light" lang={lang}>
      <body>
        {children}
      </body>
    </html>
  );
}
