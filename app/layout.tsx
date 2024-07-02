import type { Metadata } from "next";
import { Work_Sans as workSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const workSansInstance = workSans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guilherme Suzuki",
  description: "Guilherme Suzuki dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={workSansInstance.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
