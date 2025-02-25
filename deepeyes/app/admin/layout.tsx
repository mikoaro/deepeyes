import "../globals.css";

// import Sidebar from "@/components/sidebar-admin";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full py-10">
        <Header />
        {children}
      </div>
    </div>
  );
}
