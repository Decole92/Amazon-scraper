import ClientProvider from "../components/ClientProvider";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex h-screen bg-gray-100">
        <ClientProvider />
        <SideBar />
        <main className="flex-1 p-4 md:p-10 w-full max-w-7xl mx-auto overflow-y-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
