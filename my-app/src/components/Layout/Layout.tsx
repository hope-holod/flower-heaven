
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <main className="max-w-[1200px] mx-auto">{children}</main>
        <Footer />
      </div>
  );
}
