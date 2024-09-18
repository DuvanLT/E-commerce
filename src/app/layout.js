import { Inter } from "next/font/google";
import Header from "./component/Header";
import "./globals.css";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markit",
  description: "An E-commerce made with Fake Store API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
      
    </html>
  );
}
