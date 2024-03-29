import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/appbar";
import Footer from "@/components/footer";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen  mx-auto">
          <Providers>
            <Appbar />
            <div className="flex-grow mt-20">{children}</div>
            <Footer />{" "}
          </Providers>
        </div>
      </body>
    </html>
  );
}
