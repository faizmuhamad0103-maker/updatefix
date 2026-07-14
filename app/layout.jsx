import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "moneyKu - Luxe Pastel Finance",
  description: "Personal Finance Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}