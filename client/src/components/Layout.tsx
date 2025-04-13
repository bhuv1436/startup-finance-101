import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Layout = ({ children, darkMode, setDarkMode }: LayoutProps) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
