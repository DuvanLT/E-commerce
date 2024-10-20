import { Inter } from "next/font/google";
import Header from "./component/Header";
import "./globals.css";
import Footer from "./component/Footer";
import { CartProvider } from "./context/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markit",
  description: "An E-commerce made with Fake Store API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider >
        <Header />
        {children}
        <Footer />
        </CartProvider>
        </body>
      
    </html>
  );
}
