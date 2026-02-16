import { ReactNode } from "react";
import "./MainLayout.css";

interface MainLayoutProps {
  title: string;
  children?: ReactNode;
}

function MainLayout({ title = "title", children }: MainLayoutProps) {
  return (
    <>
      <head>
        <h1>{title}</h1>
      </head>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
