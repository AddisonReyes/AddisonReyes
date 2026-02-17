import { ReactNode } from "react";
import "./MainLayout.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  title: string;
  children?: ReactNode;
}

function MainLayout({ title = "title", children }: MainLayoutProps) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
