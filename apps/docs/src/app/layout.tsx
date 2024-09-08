import "./globals.css";
import Menu from "@/components/ui/menu/menu";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Lab | Pol Gubau Amores",
  description: "A collection of experiments and projects by Pol Gubau Amores",
};
const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/download", label: "Download" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"dark"}>
      <body className="dark:bg-secondary-900 dark:text-secondary-50 overflow-x-hidden ">
        <Menu links={menuLinks} />
        <main className="min-h-screen flex flex-col items-center py-20 ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
