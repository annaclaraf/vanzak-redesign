import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressScroll } from "@/components/progress-scroll";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanzak Labs | Agência de Perfomance",
  description: "Agência focada em construção e fortalecimento de marcas no âmbito digital com DNA inovador e jovem.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserratSans.variable} antialiased font-[family-name:var(--font-montserrat-sans)] bg-dark text-light`}>
        <ProgressScroll />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
