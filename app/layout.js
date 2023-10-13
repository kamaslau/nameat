import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-800 flex flex-col h-screen justify-end`}
      >
        <main
          className="grow flex flex-col relative"
          style={{
            height: "calc(100vh - 48)",
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
