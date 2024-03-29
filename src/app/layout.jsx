import AppFooter from "@/components/AppFooter";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary font-base">
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
