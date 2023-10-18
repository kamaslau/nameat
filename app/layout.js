import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-slate-800 flex flex-col h-screen justify-end`}>
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
